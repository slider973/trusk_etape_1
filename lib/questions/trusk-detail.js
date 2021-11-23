"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truskCourseDetailQuestion = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = (0, tslib_1.__importDefault)(require("inquirer"));
const console_message_1 = require("../models/console-message");
async function truskCourseDetailQuestion(answer) {
    return inquirer_1.default.prompt([
        {
            name: 'nameOfTrusker',
            type: 'input',
            message: 'Quel est le nom du trusker',
            validate(answer) {
                if (!answer) {
                    return console_message_1.ConsoleMessage.PLEASERWRITE;
                }
                return true;
            }
        },
        {
            name: 'nameOfEnterprise',
            type: 'input',
            message: 'Quel est  le nom de la société',
            validate(answer) {
                if (!answer) {
                    return console_message_1.ConsoleMessage.PLEASERWRITE;
                }
                return true;
            }
        },
        {
            name: 'numberOfStaff',
            type: 'input',
            message: 'Quel est  Le nombre d\'employés',
            validate(answer) {
                if (!answer) {
                    return console_message_1.ConsoleMessage.PLEASERWRITE;
                }
                return true;
            }
        },
        {
            name: 'numberOfTruck',
            type: 'TruskInput',
            message: 'Quel est  le nombre de camion',
            validate(answer) {
                if (!answer) {
                    return console_message_1.ConsoleMessage.PLEASERWRITE;
                }
                return true;
            }
        }
    ], answer && answer);
}
exports.truskCourseDetailQuestion = truskCourseDetailQuestion;
//# sourceMappingURL=trusk-detail.js.map