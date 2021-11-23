import {QuestionTypeInterface} from "../type";

export function truckListQuestionBuilder(number: number): Array<QuestionTypeInterface> {
    return [
        {
            "name": `volumeInCubicMeters${number}`,
            "type": 'input',
            "message": `Quel est le volume en m3 du camion numero ${number}`
        },
        {
            name: `typeOfTruck${number}`,
            type: 'input',
            message: `Quel est le Type de camion numero ${number}`
        }
    ]
}

