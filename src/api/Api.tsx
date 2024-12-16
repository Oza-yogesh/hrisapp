import axios, { AxiosInstance, AxiosResponse } from "axios";

// Helper function to initialize Axios instance
const getInitialized = (
  contentType: string = "application/json",
  params?: Record<string, string>
): AxiosInstance => {
  return axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_SERVER_URL,
    params: params || undefined,
    headers: { "Content-Type": contentType },
  });
};

// GET Request
export const getRequest = (
  url: string,
  params?: Record<string, string>,
  contentType?: string
): Promise<AxiosResponse<any>> => {
  return getInitialized(contentType, params).get(url);
};

// POST Request
export const postRequest = (
  url: string,
  data: unknown,
  contentType?: string
): Promise<AxiosResponse<any>> => {
  return getInitialized(contentType).post(url, data);
};

// PUT Request
export const putRequest = (
  url: string,
  data: unknown,
  contentType?: string
): Promise<AxiosResponse<any>> => {
  return getInitialized(contentType).put(url, data);
};

// DELETE Request
export const deleteRequest = (
  url: string,
  params?: Record<string, string>,
  contentType?: string
): Promise<AxiosResponse<any>> => {
  return getInitialized(contentType, params).delete(url);
};
