import axios from 'axios';

const KEY = '44974323-1752154cdca42bc557911675e';
const url = 'https://pixabay.com/api/';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1) => {
  const searchParams = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  });

  try {
    const response = await axios.get(`${url}?${searchParams}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
