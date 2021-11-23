"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truckListQuestionBuilder = void 0;
function truckListQuestionBuilder(number) {
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
    ];
}
exports.truckListQuestionBuilder = truckListQuestionBuilder;
//# sourceMappingURL=truck-list-question.js.map