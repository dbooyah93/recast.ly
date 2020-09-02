// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYoutube from './lib/searchYoutube.js';
import ytAPI from './config/youtube.js';

ReactDOM.render(
  <App searchYoutube= {searchYoutube} API_KEY={ytAPI} />,
  document.getElementById('app')
);


