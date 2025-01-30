import { Product } from "./product";
import { ResponseModel } from "./responseModels";

export interface ProductResponseModel extends ResponseModel {
    data : Product[],
}