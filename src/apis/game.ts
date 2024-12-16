import request from "./request"

export const getGameData = () => request.get("/mocks/gameTestData.json")