import axios from "axios";

// import { API_BASE_URL, API_PORT } from "@env";

const API_BASE_URL = "http://192.168.0.61";
const API_PORT = "4000";

const baseUrl = `${API_BASE_URL}:${API_PORT}`;

class UserService {
    static authHeaders(token) {
        return {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };
    }

    static loginUser(userName, pwHash) {
        return axios.post(`${baseUrl}/login`, { userName, pwHash });
    }

    static registerUser(data) {
        return axios.post(`${baseUrl}/register`, data);
    }

    static getUserSettings(userID) {
        return axios.get(`${baseUrl}/api/users/${userID}/settings`);
    }

    static getUserInfo(token) {
        return axios.get(`${baseUrl}/api/users/self`, this.authHeaders(token));
    }

    static getUserLevel(userID) {
        return axios.get(`${baseUrl}/api/users/${userID}/level`);
    }
}

export default UserService;
