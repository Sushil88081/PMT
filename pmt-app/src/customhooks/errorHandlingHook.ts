import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ,
  headers: {
    "Content-Type": "application/json",
  },
});

// Custom API Error Handler
export const setupApiErrorHandler = () => {
const interceptor=  apiClient.interceptors.response.use(
    (response) => {
      if (response?.data?.error?.code === 400) {
        toast.error(response.data.error.message || "Bad Request");
      }
      if (response?.data?.error?.code === 404) {
        toast.warn(response.data.error.message || "Not Found");
      }
      return response;
    },
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            toast.error("HTTP 400 Bad Request");
            break;
          case 401:
            toast.error("Unauthorized. Redirecting to login...");
            window.location.href = "/login";
            break;
          case 403:
            toast.error("Forbidden");
            break;
          case 404:
            toast.warn("HTTP 404 Not Found");
            break;
          case 500:
            toast.error("Server error");
            break;
          default:
            toast.error("Something went wrong");
        }
      } else {
        toast.error("Network error");
      }
      return Promise.reject(error);
    }
        
  );
  // cleanup interceptor when component unmounts
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
};

export default apiClient;
