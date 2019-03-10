import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.unsplash.com/photos?client_id=5a8c57904aa1b541702e3e576e7b12482032a22a4ece5a2d617fd37190e28fe7&per_page=20&order_by="
})

export default instance;