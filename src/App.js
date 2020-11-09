import './App.css';
import MainPage from './components/MainPage/MainPage';
import addRecipe from './components/AddRecipe/AddRecipe'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList/RecipeList';
import Background from './components/Background/Background';

function App() {
  return (
    <div className="App">
      <Background>
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/addrecipe" component={addRecipe} />
          <Route exact path="/recipelist" component={RecipeList} />
        </Router>
      </Background>
    </div>
  );
}

export default App;
