import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID ="d6b1d977";
  const APP_KEY ="54350e35b88d21279613686618355cb5";

  const [recipes, setRecipes] = useState([]);
  const [search , setSearch] = useState('');
  const [query, setQuery] = useState('pasta');

  useEffect(()=>{
     getRecipes();
  },[query]);
  
  const getRecipes = async()=>{
    const Response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await Response.json();
    setRecipes(data.hits);  
  };
  const searchItem = e => {
    setSearch(e.target.value);
  };
  const getQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getQuery} className="search-form">
        <input className="search-input" type="text" value={search} onChange={searchItem}/>
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="Recipes">
        {recipes.map(recipe =>(
          <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
        ))
        } 
      </div>
    </div>
  );
}

export default App;
