"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truskbot = void 0;
const logger_util_1 = require("./utils/logger.util");
const { promisify } = require("util");
const questions_1 = require("./questions");
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)();
const getAsync = promisify(redisClient.get).bind(redisClient);
const save = (client, key, data) => {
    client.set(key, JSON.stringify(data));
};
const getDataFromRedis = async (key) => {
    const data = await getAsync(key);
    if (data) {
        return JSON.parse(data);
    }
    return undefined;
};
async function truskbot() {
    redisClient.on("error", function (error) {
        console.error(error);
    });
    const truskDetailAnswerStocked = await getDataFromRedis('truskDetailAnswer');
    (0, logger_util_1.showTitleAndBanner)();
    const truskDetailAnswer = await (0, questions_1.truskCourseDetailQuestion)(truskDetailAnswerStocked);
    const numberOfTruck = truskDetailAnswer.numberOfTruck;
    const numberOfStaff = truskDetailAnswer.numberOfStaff;
    let employeeListQuestion = [];
    let truckListQuestion = [];
    save(redisClient, 'truskDetailAnswer', truskDetailAnswer);
    const employeeListAnswerStocked = await getDataFromRedis('employeeListAnswer');
    console.log('employeeListAnswerStocked:', !employeeListAnswerStocked);
    if (!employeeListAnswerStocked) {
        for (let i = 0; i < numberOfStaff; i++) {
            employeeListQuestion = [...employeeListQuestion, ...(0, questions_1.employeeListQuestionBuilder)(i + 1)];
        }
    }
    const truckListAnswerStocked = await getDataFromRedis('truckListAnswer');
    if (truckListAnswerStocked) {
        for (let i = 0; i < numberOfTruck; i++) {
            truckListQuestion = [...truckListQuestion, ...(0, questions_1.truckListQuestionBuilder)(i + 1)];
        }
    }
    const employeeListAnswer = await (0, questions_1.GenericQuestion)(employeeListQuestion, employeeListAnswerStocked);
    save(redisClient, 'employeeListAnswer', employeeListAnswer);
    const truckListAnswer = await (0, questions_1.GenericQuestion)(truckListQuestion, truckListAnswerStocked);
    save(redisClient, 'truckListAnswer', truckListAnswer);
    console.log('employeeListAnswer:', employeeListAnswer);
    console.log('truckListAnswer:', truckListAnswer);
}
exports.truskbot = truskbot;
//# sourceMappingURL=truskbot.js.map