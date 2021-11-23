"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTruckCourseDetails = void 0;
const buildTruckCourseDetails = ({ nameOfEnterprise, numberOfTruck, numberOfStaff, nameOfTrusker, truckList = [] }) => {
    return {
        nameOfEnterprise,
        nameOfTrusker,
        numberOfStaff,
        numberOfTruck,
        truckList,
    };
};
exports.buildTruckCourseDetails = buildTruckCourseDetails;
//# sourceMappingURL=build-truck-course-details.js.map