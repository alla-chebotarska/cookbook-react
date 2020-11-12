import './App.css';
import MainPage from './components/MainPage/MainPage';
import addRecipe from './components/AddRecipe/AddRecipe';
import Recipe from './components/Recipe/Recipe';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList/RecipeList';
import Background from './components/Background/Background';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Background>
        <Container>
          <Router>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/addrecipe" component={addRecipe} />
            <Route exact path="/recipelist" component={RecipeList} />
            <Route exact path="/recipe/:id" component={Recipe} />
          </Router>
        </Container>
      </Background>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover />
    </div>
  );
}

export default App;
