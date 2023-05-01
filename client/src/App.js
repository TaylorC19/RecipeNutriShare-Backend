import "./App.css";
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import NewRecipe from "./pages/NewRecipe";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext";
import NewUser from "./pages/NewUser";
import EditRecipe from "./pages/EditRecipe";
import PublicRecipes from "./pages/PublicRecipes";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteSignIn from "./components/ProtectedRouteSignIn";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new-user" element={<NewUser />}></Route>
          <Route path="/public-recipes" element={<PublicRecipes />}></Route>
          <Route path="/signup" element={
            <ProtectedRouteSignIn>
              <SignUp />
            </ProtectedRouteSignIn>
          }></Route>
          <Route path="/signin" element={
            <ProtectedRouteSignIn>
              <SignIn />
            </ProtectedRouteSignIn>
          }></Route>
          <Route path="/my-recipes" element={
            <ProtectedRoute>
              <MyRecipes />
            </ProtectedRoute>
          }></Route>
          <Route path="/new-recipe" element={
            <ProtectedRoute> 
              <NewRecipe />
            </ProtectedRoute>
          }></Route>
          <Route path="/edit-recipe" element={
            <ProtectedRoute> 
              <EditRecipe />
            </ProtectedRoute>
          }></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
