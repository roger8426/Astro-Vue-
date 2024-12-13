import request from "./request"

export const getHotGamesData = () => request.get('/mocks/hotGames.json')