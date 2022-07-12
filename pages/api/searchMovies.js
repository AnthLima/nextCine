import { apiBase, apiKey } from "../../lib/tmdb";
export default function handler(req, res) {
  let searchedMovie = req.params.searchedMovie;
  let fetchingApi = fetch(
    `${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&page=1&include_adult=false&quey=${searchedMovie}`
  );

  let jsonOfFetchingApi = fetchingApi.json();

  res.status(200).json({
    searchedMovie: jsonOfFetchingApi,
  });
}
