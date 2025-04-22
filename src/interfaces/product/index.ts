export interface IProductRequest {
    image_primary:string
    quantity: number
    image_secondary: string
    points:number
    type:string
    describe:string
    isPromotion:boolean
}

export interface IProduct {
    image_primary?:string
    quantity?: number
    image_secondary?: string
    points?:number
    type?:string
    describe?:string
}