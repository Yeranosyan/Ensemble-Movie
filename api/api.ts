import axios from "axios";

export async function getMovies(title: string) {
  let apiUrl = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`;

  if (title) {
    apiUrl += `&s=${title}`;
  }
  return await axios.get(apiUrl);
}
