import axios from 'axios';

const api = axios.create({
    baseURL: 'https://narnia.compraqui.app',
});

export default api;