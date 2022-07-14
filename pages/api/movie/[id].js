import { apiBase, apiKey } from "../../../lib/tmdb";
export default async (req, res) => {
  let idOfMovie = req.query.id;
  let fetchingApi = await fetch(
    `${apiBase}/movie/${idOfMovie}?api_key=${apiKey}&language=pt-BR&page=1&include_adult=false`
  );

  let jsonOfFetchingApi = await fetchingApi.json();

  res.status(200).json({
    detailsOfMovie: jsonOfFetchingApi,
  });
};
