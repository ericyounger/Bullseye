import axios from "axios";
// import { API_BASE_URL, API_PORT } from "@env";

const API_BASE_URL = "http://10.0.2.2";
const API_PORT = "4000";

const baseUrl = `${API_BASE_URL}:${API_PORT}`;

class PlayerService {
    static getPlayerMatchScore(matchID, userID) {
        return axios.get(`${baseUrl}/api/matches/${matchID}/scores/${userID}`);
    }
}

export default PlayerService;
