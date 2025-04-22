import { Address } from "../../entities/address.entity";

export interface IUserRequest {
    name: string;
    phone: string;
    role:string;
    email:string;
    password:string;
    cpf:string;
    address:Address;    
}

export interface IUserUpdateResquest {
    phone?:string;
    email?:string;
    address?:Address;   
}

export interface IUserLogin {
    email: string;
    password: string;
  }