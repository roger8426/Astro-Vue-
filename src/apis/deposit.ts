import request from "./request"

export const getDepositData = () => request.get('/mocks/deposit.json')