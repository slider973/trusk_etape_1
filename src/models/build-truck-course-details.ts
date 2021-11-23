import {TruckCourseDetailAnswer} from "./choice";

export interface TruckCourseDetailsInterface {
    nameOfTrusker: string;
    nameOfEnterprise: string;
    numberOfStaff: number;
    numberOfTruck: number;
    truckList: TruckDetail[];
}

export interface TruckDetail {
    volumeInCubicMeters: number;
    typeOfTruck: string;
}

export const buildTruckCourseDetails = (
    {
        nameOfEnterprise,
        numberOfTruck,
        numberOfStaff,
        nameOfTrusker,
        truckList = []
    }: TruckCourseDetailAnswer): TruckCourseDetailsInterface => {
    return {
        nameOfEnterprise,
        nameOfTrusker,
        numberOfStaff,
        numberOfTruck,
        truckList,
    }
}