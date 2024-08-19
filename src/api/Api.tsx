import axios, { AxiosInstance, AxiosResponse } from "axios";

const getInitialized = (
  contentType?: string,
  params?: Record<string, string> | undefined
): AxiosInstance => {
  return axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_SERVER_URL,
    params: params ? params : undefined,
    headers: { "Content-Type": contentType ? contentType : "application/json" },
  });
};

// GET
export const getRequest = (
  url: string,
  params?: Record<string, string>,
  contentType?: string
): Promise<AxiosResponse<any, any>> => {
  return getInitialized(contentType, params).get(url);
};

// POST
export const postRequest = (
  url: string,
  contentType: string,
  data: unknown
): Promise<AxiosResponse<any, any>> => {
  return getInitialized(contentType).post(url, data);
};
