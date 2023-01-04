import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Ingredientform from './Pages/Ingredientform'
import Home from './Pages/Home';
import RecipeForm from './Pages/RecipeForm';
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'brown',
  fontFamily:  "Rakkas",
  
};

 function App() {

   return (
     <div className="App">
    <header className="App-header">
     <div>
     <NavUnlisted>
      <Link to="/" style={linkStyle}>
        Home 
      </Link>
      <Link to="/addIngredient" style={linkStyle}>
      Add Ingredients 
      </Link>
      <Link to="/addRecipe" style={linkStyle}>
      Add Recipes
      </Link>
    </NavUnlisted>
   <br/> 
 </div>     
 <Routes>
 <Route path="/" element ={<Home />} />
   <Route path="/addIngredient" element ={<Ingredientform/>} />
   <Route path="/addRecipe" element ={<RecipeForm/>} />
 </Routes>
      </header>
    </div>
  );
}

export default App;
