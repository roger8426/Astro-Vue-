import request from "./request"

// interface testData {
//     account: string,
//     password: string
// }

export const getHomeMeta = () => request.get('/mocks/home.json')

export const getIndexContent = () => request.get('/mocks/index.json')