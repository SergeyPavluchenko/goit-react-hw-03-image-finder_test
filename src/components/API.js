import axios from 'axios';

const AUTH_KEY = '30720436-88ffd0ded62e0d7b7cde7caf4';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const qwe = async () => {
  const response = await axios.get(
    `?q=cat&lang=ru&key=${AUTH_KEY}&page=1&image_type=1&orientation=horizontal&per_page=12`
  );
  return response;
};
