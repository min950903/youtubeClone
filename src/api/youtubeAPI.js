import client from './client';

export const getVideoList = async () => {
  try {
    const response = await client.get('/videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 20,
        regionCode: 'KR',
      },
    });

    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchList = async (searchKeyWord) => {
  try {
    const query = searchKeyWord !== undefined ? searchKeyWord : 'bts';
    const response = await client.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        q: { query },
        type: 'video',
      },
    });

    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};
