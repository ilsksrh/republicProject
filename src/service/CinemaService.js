import axios from 'axios'

const CINEMA_REST_API_URL = 'http://localhost:8091/cinema';

class CinemaService {
    getCinemas(){
        return axios.get(CINEMA_REST_API_URL);
    }
    getCinema(cinemaId){
        return axios.get(CINEMA_REST_API_URL+"/"+cinemaId);
    }
    deleteCinema() {
        return axios.delete(CINEMA_REST_API_URL);
    }
}

export default new CinemaService();