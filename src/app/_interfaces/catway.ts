import { StringifyOptions } from "querystring";

export interface ICatway {
    catwayNumber: number,
    type: string,
    catwayState: string,
    _id: string | null,
}

export interface ISingleCatway {
    data: ICatway
}

export interface IDataCatway{
    data: ICatway[]
}