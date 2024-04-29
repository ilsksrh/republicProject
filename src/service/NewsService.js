import axios from 'axios'

const NEWS_REST_API_URL = 'http://localhost:8091/news';

class NewsService {
    getNews(){
        return axios.get(NEWS_REST_API_URL);
    }
    getOneNews(newsId){
        return axios.get(NEWS_REST_API_URL+"/"+newsId);
    }
}

export default new NewsService();