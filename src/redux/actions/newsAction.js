export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
import { newsApiKey } from '../../../keys';

export const fetchArticles = () => {
  return async (dispatch) => {
    // logic to fetch news data
    const result = await fetch(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${newsApiKey}`);

    const resultData = await result.json();
    dispatch({
      type: FETCH_ARTICLES,
      payload: resultData,
    });
  };
};

export const toggleFavorites = (url) => {
  return {
    type: TOGGLE_FAVORITES,
    payload: url,
  };
};
