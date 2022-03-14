export interface singupModel{
    email: string,
    name: string,
    password: string
}

export interface AuthResData{
    user_id?: string,
    email: string,
    name?: string,
    token?: string
}

export interface loginModel{
    email: string,
    password: string
}

export class User{
    constructor(
        public id: string,
        public email: string,
        public name: string,
        public token: string
    ){}
    
}