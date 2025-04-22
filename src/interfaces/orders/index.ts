import { Product } from "../../entities/product.entity"

export interface IOrdersRequest {
    user_id:number
    image_primary: string
    describe:string
    points:number
}

export interface IOrdersUpdateRequest {
    user_id:string
    status: string
    points:number
    update_date:Date
}