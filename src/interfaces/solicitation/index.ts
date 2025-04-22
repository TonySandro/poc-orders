import { Wastes } from "../../entities/wastes.entity"

export interface ISolicitationRequest {
    wastes:Wastes[]
    user_id: number
    status: string
    create_date?:Date
    points:number
    isReceive:boolean
}

export interface ISolicitationUpdate {
    solicitation_id:number
    status: string
    points:number
    update_date:Date
}