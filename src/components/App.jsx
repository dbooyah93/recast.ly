import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
  }


  clickHandler(target) {
    this.setState({
      currentVideo: target
    });
  }


  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search /></em> Search</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em> Video Player</h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videos} clickable={this.clickHandler.bind(this)}/></em> Video List</h5></div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;