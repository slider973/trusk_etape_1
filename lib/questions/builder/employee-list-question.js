"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeListQuestionBuilder = void 0;
function employeeListQuestionBuilder(number) {
    return [
        {
            "name": `nameEmployee${number}`,
            "type": 'input',
            "message": `Quel est le de l\' employé numero ${number}`
        },
    ];
}
exports.employeeListQuestionBuilder = employeeListQuestionBuilder;
//# sourceMappingURL=employee-list-question.js.map