import axios from 'axios';
const KEY = 'tx5PaRmtQ3dUkaJsusPP1EL1X689uQHE68acBPkOs-w';
axios.defaults.baseURL = "https://api.unsplash.com/";
import { FetchDataProps } from './unsplash-api.types';

const fetchData = async (query:string, page:number, per_page:number):Promise<FetchDataProps> => {
        const response = await axios.get(`search/photos`, {
            params: {
                client_id: KEY,
                query: query,
                page: page,
                per_page: per_page,
            }
        })
    return response.data;
}

export default fetchData;