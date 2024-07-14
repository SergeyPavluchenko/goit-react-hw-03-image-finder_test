import axios from 'axios';
// import toast from 'react-hot-toast';

const AUTH_KEY = '30720436-88ffd0ded62e0d7b7cde7caf4';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// export const SearchAPI = async (text, page) => {
//   try {
//     const response = await axios.get(
//       `?q=${text}&lang=ru&key=${AUTH_KEY}&page=${page}&image_type=1&orientation=horizontal&per_page=12`
//     );
//     return response.data.hits;
//   } catch (error) {
//     toast.error('Щось пішло не так 🤷‍♀️', { duration: 1000 });
//   }
// };

export const SearchAPI = async (text, page) => {
  const response = await axios.get(
    `?q=${text}&lang=ru&key=${AUTH_KEY}&page=${page}&image_type=1&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
