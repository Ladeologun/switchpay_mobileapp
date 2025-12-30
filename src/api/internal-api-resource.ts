import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { store } from "@/store";


export const internalAPIResource = () => {

    const BASE_URL = "https://switchpay-backend.onrender.com/api/v1/";
    const client = axios.create({
        baseURL: BASE_URL,
        headers: {
            // Authorization: `Bearer ${idToken}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

  /**
   * Request Interceptor
   */
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (!config?.skipToken) {
        const state = store.getState();
        const token = state.auth.idToken;
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  /**
   * Response interceptor
   */
  client.interceptors.response.use((response: AxiosResponse) => {
    if (![200, 201].includes(response?.status)) {
      Promise.reject(response);
    }
    return Promise.resolve(response?.data);
  }, ApiErrorResource);

  return client;
};

const ApiErrorResource = (error: AxiosError) => {
    try {
        const status = error?.request?.status;
        if (status >= 500 && status <= 599) {
        }

        if (status >= 400 && status <= 499) {
            if (status === 401) {
               
            }
            throw error?.response
        }

        throw error?.response?.data;
    } catch (error) {
        return Promise.reject(error);
    }
};
