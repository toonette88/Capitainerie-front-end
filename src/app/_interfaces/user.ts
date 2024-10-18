export interface IUser {
    createdAt?:string,
    email: string,
    name: string,
    password: string,
    updatedAt?: string,
    _id?: string,
}

export interface ISingleUser {
    data: IUser
}

export interface IDataUser {
    data: IUser[]
}