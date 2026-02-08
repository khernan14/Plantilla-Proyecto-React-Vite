const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const fetchClient = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    // Si el token expiró (401), podrías limpiar el storage
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    const data = await response.json();
    if (!response.ok) throw data;
    return data;
  } catch (error) {
    throw error;
  }
};
