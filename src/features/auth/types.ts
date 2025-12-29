
export interface UserDetails {
    email: string;
    firstName: string;
    lastName: string;
}

export type RegisterPayload = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};


export type AuthAPIResponse = {
    message: string;
    data : {
        token: string;
    }
};

export type LoginPayload = {
    username: string;
    password: string;
};

export interface AuthErrorResponse {
    message: string
    status: boolean
    httpStatus: string
}
