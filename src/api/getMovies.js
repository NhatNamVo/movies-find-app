import axios from 'axios';

const url= "https://www.omdbapi.com/";
const key= "755cb701";

const getMovies = {
    getAllMovies(search, page=1) {
        return axios.get(`${url}?apikey=${key}&s=${search}&page=${page}`);
    },
    getOneMovies(id){
        return axios.get(`${url}?apikey=${key}&i=${id}`);
    }
}

export default getMovies;