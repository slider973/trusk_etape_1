import {TruckCourseDetailsInterface, TruckDetail} from "./build-truck-course-details";

export interface Choice {
    name: string;
    value: any;
}



export interface TruckCourseDetailAnswer extends TruckCourseDetailsInterface{}
export interface TruckListAnswer extends TruckDetail{}
