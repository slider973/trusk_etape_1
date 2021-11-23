import {QuestionTypeInterface} from "../type";

export function employeeListQuestionBuilder(number: number): Array<QuestionTypeInterface> {
    return [
        {
            "name": `nameEmployee${number}`,
            "type": 'input',
            "message": `Quel est le de l\' employé numero ${number}`
        },
    ]
}
