import axios from "axios";

// Base URL from .env
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// =========================
// 📩 Subscribe API
// =========================
export const subscribeUser = (data) => {
  return API.post("/subscribe", data);
};

// =========================
// 📬 Send Message API
// =========================
export const sendMessage = (data) => {
  return API.post("/messages", data);
};

// =========================
// 📥 Get All Messages (optional)
// =========================
export const getMessages = () => {
  return API.get("/message");
};

// =========================
// 📧 Get Subscribers (optional)
// =========================
export const getSubscribers = () => {
  return API.get("/subscribe");
};

export default API;