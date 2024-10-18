export interface ICatway {
    catwayNumber: string,
    type: string,
    catwayState: string,
    _id?: string,
}

export interface ISingleCatway {
    data: ICatway
}

export interface IDataCatway{
    data: ICatway[]
}