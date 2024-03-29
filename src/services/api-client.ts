import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";



export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];

}

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    }

    getOne = (id: number | string, config?: AxiosRequestConfig) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id, config).then(res => res.data);
    }
}

export default APIClient;