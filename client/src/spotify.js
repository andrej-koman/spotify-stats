import axios from "axios";

const getAccessToken = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get("access_token");

    const hasError = urlParams.get("error");
    if (hasError) {
        alert("There was an error logging in to Spotify. Please try again.");
    }

    if (localStorage.getItem("access_token")) {
        return localStorage.getItem("access_token");
    }

    if (accessToken) {
        localStorage.setItem("access_token", accessToken);
        return accessToken;
    }

    return "";
}

export const accessToken = getAccessToken();

export const logout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
};


axios.defaults.baseURL = "https://api.spotify.com/v1";
axios.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
axios.defaults.headers["Content-Type"] = "application/json";

export const getCurrentUserProfile = () => {
    return axios.get("/me");
}