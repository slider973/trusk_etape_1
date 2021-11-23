"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericQuestion = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = (0, tslib_1.__importDefault)(require("inquirer"));
async function GenericQuestion(questionList, answer = undefined) {
    return inquirer_1.default.prompt(questionList, answer && answer);
}
exports.GenericQuestion = GenericQuestion;
//# sourceMappingURL=generic-question.js.map