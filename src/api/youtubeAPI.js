import client from './client';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getVideoList = async () => {
  try {
    const response = await client.get(
      `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${API_KEY}`,
    );

    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchList = async (searchKeyWord) => {
  try {
    const query = searchKeyWord !== undefined ? searchKeyWord : 'bts';
    const response = await client.get(
      `/search?part=snippet&maxResults=20&q=${query}&type=video&key=${API_KEY}`,
    );

    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};
