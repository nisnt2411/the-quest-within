import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import SinglePost from './Components/SinglePost';
import Post from './Components/Post';
import Gallary from './Components/Gallary';
import SingleImage from './Components/SingleImage'
 const App = props => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={SingleImage} path="/gallary/:slug"/>
        <Route component={Gallary} path="/gallary"/>
      </Switch>
    </Router>
  );
}

export default App;
