import axios from "axios";
export const Get = async (value) => {
  try {
    console.log(import.meta.env.VITE_SECRET)
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${value}&apiKey=${import.meta.env.VITE_API_KEY}`);
    return response.data; // Return the data obtained from the API
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught in the caller function
  }
};