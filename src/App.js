import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import addRecipe from './components/AddRecipe/AddRecipe';
import Background from './components/Background/Background';
import MainPage from './components/MainPage/MainPage';
import Recipe from './components/Recipe/Recipe';
import RecipeList from './components/RecipeList/RecipeList';

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
