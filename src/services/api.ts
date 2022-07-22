import axios from 'axios';
import mapper from './mapper';
import { TEverythingResponse } from './responses';

const BASE_URL = 'https://newsapi.org/v2';

type TEverythingParams = {
  q?: string;
};

const request = axios.create({ baseURL: BASE_URL, params: { apiKey: process.env.REACT_APP_NOT_SECRET_CODE, country: 'us' } });

export const posts = {
  top: (params: TEverythingParams = { q: '' }) => request.get<TEverythingResponse>('/top-headlines', { params })
    .then((response) => response.data.articles.map(mapper))
};
