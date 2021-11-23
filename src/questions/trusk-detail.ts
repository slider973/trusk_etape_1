import inquirer from 'inquirer';

import {TruckCourseDetailAnswer} from '../models/choice';
import {ConsoleMessage} from "../models/console-message";

export async function truskCourseDetailQuestion(answer?: any): Promise<TruckCourseDetailAnswer> {
    return inquirer.prompt([
        {
            name: 'nameOfTrusker',
            type: 'input',
            message: 'Quel est le nom du trusker',
            validate(answer) {
                if(!answer) {
                    return ConsoleMessage.PLEASERWRITE
                }
                return true
            }
        },
        {
            name: 'nameOfEnterprise',
            type: 'input',
            message: 'Quel est  le nom de la société',
            validate(answer) {
                if(!answer) {
                    return ConsoleMessage.PLEASERWRITE
                }
                return true
            }
        },
        {
            name: 'numberOfStaff',
            type: 'input',
            message: 'Quel est  Le nombre d\'employés',
            validate(answer) {
                if(!answer) {
                    return ConsoleMessage.PLEASERWRITE
                }
                return true
            }
        },
        {
            name: 'numberOfTruck',
            type: 'TruskInput',
            message: 'Quel est  le nombre de camion',
            validate(answer) {
                if(!answer) {
                    return ConsoleMessage.PLEASERWRITE
                }
                return true
            }
        }
    ], answer && answer);
}