export interface AccountDetails {
    id: number;
    currency: string;
    curencyCode: string;
    balance: number;
    accountNumber: string;
}

export interface AccountsAPIResponse {
    message: string;
    data : AccountDetails[];
};