import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, clickable}) => {
  // console.log(clickable);
  return (
    videos.map( ele => {
      return (
        <VideoListEntry key={ele.id.videoId} video={ele} title={ele.snippet.title} videoDesc={ele.snippet.description} clicky={clickable}/>
      );
    })
  );
};





// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
