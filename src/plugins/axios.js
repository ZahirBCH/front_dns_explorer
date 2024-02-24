import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.zahirdcg.fr', // Remplace avec l'URL de ton backend
});

export default instance;