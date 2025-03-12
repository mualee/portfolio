import axios from "axios";

const API = "https://jsonplaceholder.typicode.com";

// Replace with your own access and refresh tokens
const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

// Create an Axios instance
const axiosInstance = axios.create({
	baseURL: API, // Set the base URL from your APIs constants
	headers: {
		"Content-Type": "application/json",
	},
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		const token = {
			access_token: localStorage.getItem(ACCESS_TOKEN_KEY),
			refresh_token: localStorage.getItem(REFRESH_TOKEN_KEY),
		};
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default axiosInstance;
