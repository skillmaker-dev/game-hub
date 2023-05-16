import axios, { AxiosRequestConfig } from "axios";

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '410683b689cb4db5bc5e23cd979bb3ae'
    }
})

export interface FetchResponse<T> {
    count: number;
    next?: string | null;
    results: T[];
    
}

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string)
    {
        this.endpoint = endpoint;
    }

    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint,config).then(res => res.data);
    }
}

export default APIClient;