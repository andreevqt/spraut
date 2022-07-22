import axios, { AxiosResponse } from 'axios';
import mapper from './mapper';
import { TEverythingResponse as TArticlesResponse } from './responses';

const BASE_URL = 'https://newsapi.org/v2';

const request = axios.create({ baseURL: BASE_URL, params: { apiKey: process.env.REACT_APP_API_KEY } });

const mapResponse = (response: AxiosResponse<TArticlesResponse, any>) => response.data.articles.map(mapper);

type TTopParams = {
  q?: string;
  country?: string;
};

type TEverythingParams = {
  q: string;
};

export const posts = {
  top: (params: TTopParams = { q: '' }) => request.get<TArticlesResponse>('/top-headlines', { params: { country: 'us', ...params } })
    .then(mapResponse),

  everything: (params: TEverythingParams) => request.get<TArticlesResponse>('/everything', { params })
    .then(mapResponse)
};
