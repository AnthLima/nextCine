import { apiBase, apiKey } from "../../lib/tmdb";
export default async function handler(req, res) {
  let seachText = req.query.searchText;
  let fetchingApi = await fetch(
    `${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&page=1&include_adult=false&query=${seachText}`
  );

  let jsonOfFetchingApi = await fetchingApi.json();

  res.status(200).json({
    list: jsonOfFetchingApi.results,
  });
}
