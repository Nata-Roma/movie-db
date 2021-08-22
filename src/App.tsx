import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Movie from './components/movie';
import NotFound from './components/notFound';
import { GlobalSyles } from './utils/glodalStyles';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:movieId">
          <Movie />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
      <GlobalSyles />
    </Router>
  );
};

export default App;
