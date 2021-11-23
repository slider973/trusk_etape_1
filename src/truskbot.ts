import {showTitleAndBanner} from "./utils/logger.util";

const {promisify} = require("util");
import {
    employeeListQuestionBuilder, GenericQuestion,
    QuestionTypeInterface,
    truckListQuestionBuilder,
    truskCourseDetailQuestion
} from "./questions";
import {TruckCourseDetailAnswer} from "./models/choice";
import {createClient, RedisClient} from 'redis';

const redisClient = createClient()
const getAsync = promisify(redisClient.get).bind(redisClient);

const save = (client: RedisClient, key: string, data: any) => {
    client.set(key, JSON.stringify(data))
}
const getDataFromRedis = async (key: string) => {
    const data = await getAsync(key)
    if (data) {
        return JSON.parse(data)
    }
    return undefined
}

export async function truskbot(): Promise<any> {

    redisClient.on("error", function (error) {
        console.error(error);
    });

    const truskDetailAnswerStocked = await getDataFromRedis('truskDetailAnswer')
    showTitleAndBanner();
    const truskDetailAnswer: TruckCourseDetailAnswer = await truskCourseDetailQuestion(truskDetailAnswerStocked);
    const numberOfTruck = truskDetailAnswer.numberOfTruck
    const numberOfStaff = truskDetailAnswer.numberOfStaff
    let employeeListQuestion: QuestionTypeInterface[] = []
    let truckListQuestion: QuestionTypeInterface[] = []
    save(redisClient, 'truskDetailAnswer', truskDetailAnswer)
    // verif data in redis cache
    const employeeListAnswerStocked = await getDataFromRedis('employeeListAnswer')
    console.log('employeeListAnswerStocked:', !employeeListAnswerStocked)
    if (!employeeListAnswerStocked) {
        // builder question for employee
        for (let i = 0; i < numberOfStaff; i++) {
            employeeListQuestion = [...employeeListQuestion, ...employeeListQuestionBuilder(i + 1)]
        }
    }

    const truckListAnswerStocked = await getDataFromRedis('truckListAnswer')
    if (truckListAnswerStocked) {
        // builder question for truck
        for (let i = 0; i < numberOfTruck; i++) {
            truckListQuestion = [...truckListQuestion, ...truckListQuestionBuilder(i + 1)]
        }
    }


    const employeeListAnswer = await GenericQuestion(employeeListQuestion, employeeListAnswerStocked)
    save(redisClient, 'employeeListAnswer', employeeListAnswer)
    const truckListAnswer = await GenericQuestion(truckListQuestion, truckListAnswerStocked)
    save(redisClient, 'truckListAnswer', truckListAnswer)

    console.log('employeeListAnswer:', employeeListAnswer)
    console.log('truckListAnswer:', truckListAnswer)
}