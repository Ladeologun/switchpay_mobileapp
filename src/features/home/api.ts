import { internalAPIResource } from "@/api/internal-api-resource";
import { ACCOUNT_URL } from "./constants";
import { AccountsAPIResponse } from "./types";

export const AccountsRequestAPI = async (): Promise<AccountsAPIResponse> => {
    return await internalAPIResource().get(ACCOUNT_URL())
};
