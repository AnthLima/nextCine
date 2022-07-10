import { apiKey, apiBase } from "../../lib/tmdb";
export default async (req, res) => {
  const fetchingApi = await fetch(
    `${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`
  );

  const jsonOfFetchingApi = await fetchingApi.json();
  res.status(200).json({
    list: jsonOfFetchingApi,
  });
};
