import axios, { type AxiosInstance } from 'axios';

// const isLocal = true
const getBaseURL = () => {
    // if (isLocal) {
    //     const currentPath = window.location.pathname.replace(/\/$/, "");
    //     const localPath = `${import.meta.env.VITE_LOCAL_URL}`
    //     return currentPath === "" ? `${localPath}/home.json` : `${localPath + currentPath}.json`
    // }
    return import.meta.env.VITE_LOCAL_URL
}

// 實體化 API 路徑
const instance: AxiosInstance = axios.create({
    baseURL: getBaseURL(),
    timeout: 30000,
});

// 回應介面
interface baseResponse<T> {
    code: number;
    data: T;
    message: string;
}

// 錯誤介面
// interface error<T> {
//     status: number;
//     data: baseResponse<T>;
//     message: string;
// }

// let errorData: error<object>

// 請求攔截
instance.interceptors.request.use()

// 回應攔截
instance.interceptors.response.use()

// 基礎 get / post 規範
export const get = async <T>(
    url: string,
): Promise<baseResponse<T>> => instance.get(url)

export const post = async <T>(
    url: string,
    data: any,
): Promise<baseResponse<T>> => instance.post(url, data)



export default instance