import {PlanDetailType} from "./PlanDetailType";

export interface DataType {
    id: number,
    planType: string,
    planDesc: string,
    products: PlanDetailType
}

