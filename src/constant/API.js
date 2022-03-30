export const TW = "&language=zh-TW";
export const US = "&language=en-US";
export const imgBaseUrl = "https://image.tmdb.org/t/p/w";
export const WEEK_TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}${TW}`;
export function HOT_MOVIES(page = 1) {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}${TW}&primary_release_date.gte=2017-01-01&primary_release_date.lte=2022-12-31&page=${page}&region=TW`
}
export const UP_COMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}${TW}&page=1&region=TW`;
export const NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}${TW}&page=1&region=TW`;
export const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}${US}&page=1&include_adult=false&query=`;

