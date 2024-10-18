export interface IReservation {
    _id?: string,
    catwayNumber: string,
    clientName: string, 
    boatName: string, 
    checkIn?:  string,
    checkOut?: string, 
}

export interface ISingleReservation {
    data: IReservation
}

export interface IDataReservation {
    data: IReservation[]
}