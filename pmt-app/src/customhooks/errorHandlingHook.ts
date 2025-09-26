import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



export const ErrorHandler = () => {
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => {
        // ✅ Custom API error handling
        if (response?.data?.error?.code === 400 || response?.data?.error?.code === 404) {
          alert(
            `Got custom API error code ${response.data.error.code}, reloading page...`
          );
          window.location.reload();
        }
        return response;
      },
      (error) => {
        // ✅ Normal HTTP errors
        if (error.response && (error.response.status === 400 || error.response.status === 404)) {
          alert(`Got HTTP ${error.response.status}, reloading page...`);
          window.location.reload();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);
};



export default apiClient;