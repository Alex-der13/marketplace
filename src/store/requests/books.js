import axios from 'axios';

export const getBooksApi = async (categoryName) => axios.get(`http://localhost:3000/${categoryName || 'arts'}`);
