export const TW = "&language=zh-TW";
export const US = "&language=en-US";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
export const WEEK_TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}${TW}&region=TW`;

export function HOT_MOVIES(page = 1) {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}${TW}&primary_release_date.gte=2017-01-01&primary_release_date.lte=2022-12-31&page=${page}&region=TW`;
}
export const UP_COMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}${TW}&page=1&region=TW`;
export const NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}${TW}&page=1&region=TW`;
export const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}${US}&page=1&include_adult=false&query=`;

export function MOVIE_DETAILS(movie_id) {
    return `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}${TW}`;
}

export function GET_IMAGE(movie_id) {
    return `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${process.env.REACT_APP_API_KEY}&language=zh-TW&include_image_language=zh,null`
}

export function GET_VIDEO(movie_id) {
    return `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=zh-TW&include_video_language=zh,null`
}


