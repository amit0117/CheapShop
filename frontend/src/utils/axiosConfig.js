import axios from "axios";

/**
 * Axios Configuration
 *
 * Development (npm start):
 *   - REACT_APP_API_URL is not set
 *   - baseURL is empty (relative paths like '/api/users/login')
 *   - Proxy in package.json intercepts and forwards to http://127.0.0.1:5001
 *
 * Production (npm run build / Vercel):
 *   - REACT_APP_API_URL should be set to your backend URL
 *   - baseURL is set to that URL
 *   - Axios makes full URL requests (e.g., 'https://backend.railway.app/api/users/login')
 *   - Proxy in package.json does NOT work in production builds
 */
const API_URL = process.env.REACT_APP_API_URL || "";

if (API_URL) {
  axios.defaults.baseURL = API_URL;
}

export default axios;
