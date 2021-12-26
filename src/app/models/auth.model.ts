export interface ResponseLoginAndRegister {
    status: number,
    data: {
        _id:string,
        user:string,
        token:string,
        roles:string[],
        expiredIn:string,
        fullname:string
    },
    message:string
}
