export interface ICatway {
    catwayNumber: Number,
    type: String,
    catwayState: String,
}

export interface ISingleCatway {
    data: ICatway
}

export interface IDataCatway{
    data: ICatway[]
}