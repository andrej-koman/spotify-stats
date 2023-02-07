import axios from "axios";

const LOCALSTORAGE_KEYS = {
    accessToken: "spotify_access_token",
    refreshToken: "spotify_refresh_token",
    expireTime: "spotify_token_expire_time",
    timestamp: "spotify_token_timestamp"
}

const LOCALSTORAGE_VALUES = {
    accessToken: localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
    refreshToken: localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
    expireTime: localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
    timestamp: localStorage.getItem(LOCALSTORAGE_KEYS.timestamp)
}




const hasTokenExpired = () => {
    const { accessToken, timestamp, expireTime } = LOCALSTORAGE_VALUES;

    if (!accessToken || !timestamp) {
        return false;
    }
    const milisecondsElapsed = Date.now() - Number(timestamp);
    return (milisecondsElapsed / 1000) > Number(expireTime);
}

const refreshToken = async () => {
    try {
        if (!LOCALSTORAGE_VALUES.refreshToken || LOCALSTORAGE_VALUES.refreshToken === "undefined" || (Date.now() - Number(LOCALSTORAGE_VALUES.timestamp) / 1000) < 1000) {
            console.error("No refresh token found");
            logout();
        }

        const { data } = await axios.get("http://localhost:3000/refresh_token?refresh_token=" + LOCALSTORAGE_VALUES.refreshToken);

        window.localStorage.setItem(LOCALSTORAGE_KEYS.accessToken, data.access_token);
        // @ts-ignore
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());

        window.location.reload();
    }
    catch (e) {
        console.error(e);
    }
};
/**
 * Handles logic for retrieving the Spotify access token from localStorage
 * or URL query params
 * @returns {string} A Spotify access token
 */

const getAccessToken = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const queryParams = {
        [LOCALSTORAGE_KEYS.accessToken]: urlParams.get("access_token"),
        [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get("refresh_token"),
        [LOCALSTORAGE_KEYS.expireTime]: urlParams.get("expires_in")
    }
    const hasError = urlParams.get("error");


    if (hasError || hasTokenExpired() || LOCALSTORAGE_VALUES.accessToken === "undefined") {
        console.log("hit")
        refreshToken();
    }

    if (LOCALSTORAGE_VALUES.accessToken && LOCALSTORAGE_VALUES.accessToken !== 'undefined') {
        return LOCALSTORAGE_VALUES.accessToken;
    }

    if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
        // Store the query params in localStorage
        for (const property in queryParams) {
          window.localStorage.setItem(property, queryParams[property]);
        }
        // Set timestamp
        // @ts-ignore
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());
        // Return access token from query params
        return queryParams[LOCALSTORAGE_KEYS.accessToken];
      }

    return "";
}

export const accessToken = getAccessToken();

export const logout = () => {
      // Clear all localStorage items
    for (const property in LOCALSTORAGE_KEYS) {
        window.localStorage.removeItem(LOCALSTORAGE_KEYS[property]);
    }
    window.location.href = "/";
};


axios.defaults.baseURL = "https://api.spotify.com/v1";
axios.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
axios.defaults.headers["Content-Type"] = "application/json";


export const getCurrentUserProfile = () => {
    return axios.get("/me");
}

export const getCurrentUserPlaylists = () => {
    return axios.get("/me/playlists", {params: {limit: 50, offset: 0}});
}

export const getCurrentUserTopArtists = (time_range, limit) => {
    return axios.get("/me/top/artists", {params: {limit: limit, time_range: time_range}});
}

export const getCurrentUserTopTracks = (time_range, limit) => {
    return axios.get("/me/top/tracks", {params: {time_range, limit}});
}

export const getProfileData = () => {
    return axios.all([getCurrentUserProfile(), getCurrentUserPlaylists(), getCurrentUserTopArtists("long_term", 10), getCurrentUserTopTracks("long_term", 10)]).then(
        axios.spread((profile, playlists, topArtists, topTracks) => ({
            user: profile.data,
            playlists: playlists.data,
            topArtists: topArtists.data,
            topTracks: topTracks.data
        })))
}