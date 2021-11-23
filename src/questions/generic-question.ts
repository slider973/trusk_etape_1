import inquirer from "inquirer";

export async function GenericQuestion(questionList: Array<any>, answer = undefined) {
    return inquirer.prompt(questionList, answer && answer)
}