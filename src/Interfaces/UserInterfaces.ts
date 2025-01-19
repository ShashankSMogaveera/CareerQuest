export interface User{
    name:string,
    email:string,
    password: string,
    phoneNumber: String,
    role: 'employee' | 'employer',
    resume?: Blob,
    createdAt: string,
    updatedAt: string
}

export interface loginRequestBody {
    email:string,
    password: string;
}

export interface userRequestBody extends Request {
    user: any,
    cookies: { [key: string]: string };
}

export interface loginJwtPayload {
    email: string;
}

export interface registerationRequestBody{
    name:string,
    email:string,
    password: string,
    phoneNumber: String,
    role: 'employee' | 'employer',
    resume?: Blob,
}

