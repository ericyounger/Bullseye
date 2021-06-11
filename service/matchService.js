import axios from "axios";

// import { API_BASE_URL, API_PORT } from "@env";

const API_BASE_URL = "http://10.0.2.2";
const API_PORT = "4000";

const baseUrl = `${API_BASE_URL}:${API_PORT}`;

class MatchService {
    static authHeaders(token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    }

    static createMatch() {
        const json = {};
        return axios.post(`${baseUrl}/api/matches`, json);
    }

    static getMatchSettings(matchID) {
        return axios.get(`${baseUrl}/api/matches/${matchID}`);
    }

    static joinMatch(matchID) {
        const json = {};
        return axios.post(`${baseUrl}/api/matches/${matchID}`, json);
    }

    static changeTeam(matchID) {
        const json = {};
        return axios.patch(`${baseUrl}/api/matches/${matchID}`, json);
    }

    static getMatchScoreBoard(matchID) {
        return axios.get(`${baseUrl}/api/matches/${matchID}/scores`);
    }

    static getMatchTotalScores(matchID) {
        return axios.get(`${baseUrl}/api/matches/${matchID}/scores/total`);
    }
}

export default MatchService;
