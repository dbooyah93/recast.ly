var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapi.com/youtube/v4/search', {
    part: 'snippet',
    key: key,
    query: query,
    maxResults: max,
    type: 'video',
    videoEmbadable: 'true'
  }).done(({items}) => {
    if (callback) {
      callback(items);
    }
  }).fail(({responeJSON}) => {
    responeJSON.error.errors.forEach((err) => console.error(err));
  });
};

export default searchYouTube;
