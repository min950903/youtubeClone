import client from './client';

const API_KEY = 'AIzaSyDctJuMg1TeKV2F6svtPt4DM_2At1_PsHk';

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
      `/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`,
    );

    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};
