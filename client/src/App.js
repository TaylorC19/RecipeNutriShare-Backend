import './App.css';
import Home from './pages/Home';
import MyRecipes from './pages/MyRecipes';
import NewRecipe from './pages/NewRecipe';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/my-recipes' element={<MyRecipes />}></Route>
        <Route path='/new-recipe' element={<NewRecipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
