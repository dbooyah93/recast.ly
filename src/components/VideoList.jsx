import exampleVideoData from '../data/exampleVideoData.js';


class VideoList extends React.Component {
  render() {

    return (
      <div className="vide-list"><h5>{exampleVideoData[0].snippets.title}</h5></div>
    );
  }
}

// var VideoList = () => (
//   <div className="video-list-entry media">
//     <div className="media-left media-middle">
//       <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">{exampleVideoData[0].snippets.title}</div>
//       <div className="video-list-entry-detail">Video Description</div>
//     </div>
//   </div>
// );




console.log('VideoList.jsx');
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
