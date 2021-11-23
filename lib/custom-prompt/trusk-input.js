"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruskInput = void 0;
const tslib_1 = require("tslib");
const base_1 = (0, tslib_1.__importDefault)(require("inquirer/lib/prompts/base"));
class TruskInput extends base_1.default {
    render() {
        let bottomContent = '';
        let appendContent = '';
        let message = this.getQuestion();
        const isFinal = this.status === 'answered';
        console.log('this:', this);
        console.log(message);
    }
}
exports.TruskInput = TruskInput;
//# sourceMappingURL=trusk-input.js.map