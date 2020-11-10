import './App.css';
import MainPage from './components/MainPage/MainPage';
import addRecipe from './components/AddRecipe/AddRecipe'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList/RecipeList';
import Background from './components/Background/Background';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
