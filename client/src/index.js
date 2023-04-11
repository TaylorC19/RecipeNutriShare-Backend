import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Home from './pages/Home';
import MyRecipes from './pages/MyRecipes';
import NewRecipe from './pages/NewRecipe';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="MyRecipes" element={<MyRecipes />} />
          <Route path="NewRecipe" element={<NewRecipe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


