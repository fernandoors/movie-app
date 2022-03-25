import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import MoviePage from "../pages/movie/MoviePage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
