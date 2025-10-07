import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const Api = {
  createContact: (formData) => api.post("/api/insertUser", formData),
};

export default Api; // ✅ default export
