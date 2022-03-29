export const TW = "&language=zh-TW";
export const US = "&language=en-US"
export const imgBaseUrl = "https://image.tmdb.org/t/p/w";
export const HOT_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}${TW}&page=1&region=TW`;
export const UP_COMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}${TW}&page=1&region=TW&append_to_response=videos`;
export const NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}${TW}&page=1&region=TW&include_video=true`;
export const searchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}${US}&page=1&include_adult=false&query=`;
export const TEST = `https://api.themoviedb.org/3/movie/508947?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`;
