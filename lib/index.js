"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const truskbot_1 = require("./truskbot");
function index() {
    return (0, truskbot_1.truskbot)();
}
exports.index = index;
index().catch(reason => {
    console.error(reason);
});
//# sourceMappingURL=index.js.map