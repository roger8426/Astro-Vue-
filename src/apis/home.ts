import request from "./request"

interface testData {
    account: string,
    password: string
}

export const getHomeData = () => request.get('/mocks/home.json')