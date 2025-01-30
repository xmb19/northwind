import { Category } from "./category";
import { ResponseModel } from "./responseModels";

export interface CategoryResponseModel extends ResponseModel {
    data : Category[]
}