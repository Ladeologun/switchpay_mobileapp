import { internalAPIResource } from "@/api/internal-api-resource";
import { LOGIN_URL, REGISTER_URL } from "./constants";
import { AuthAPIResponse, LoginPayload, RegisterPayload } from "./types";

export const RegisterRequestAPI = async (registerPayload: RegisterPayload): Promise<AuthAPIResponse> => {
    return await internalAPIResource().post(REGISTER_URL(), registerPayload, { skipToken: true });
};
export const LoginRequestAPI = async (loginPayload: LoginPayload): Promise<AuthAPIResponse> => {
    return await internalAPIResource().post(LOGIN_URL(), loginPayload,{ skipToken: true });
};