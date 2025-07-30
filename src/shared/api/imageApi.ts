import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const imageApi = {
  async getCityImage(city: string) {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos`,
      {
        params: {
          query: city,
          orientation: 'landscape',
          per_page: 1,
          client_id: UNSPLASH_KEY,
        },
      }
    );

    const img = res.data.results[0]?.urls?.regular || '';
    return img;
  },
};
