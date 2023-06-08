import { reactive } from "vue";

export const store = reactive({
    apiSearchMovieURL: "https://api.themoviedb.org/3/search/movie?api_key=63c693b8c2c00ea9447ca8a048c80455&query=",
    movieList: [],
    apiSearchTvURL: "https://api.themoviedb.org/3/search/tv?api_key=63c693b8c2c00ea9447ca8a048c80455&query=",
    tvList: [],
    searchText: "",
    apiImgBaseURL: "https://image.tmdb.org/t/p/w342"
});