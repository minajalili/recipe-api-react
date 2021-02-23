import React from 'react';
import './App.css';

function Recipe({title,calories,image,ingredients}){
    return(
<div className="Recipe">
    <h1>{title}</h1>
    <p>{calories}</p>
    <ol>
        {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
        ))
        }
    </ol>
    <img className="image" src={image} alt=""/>
</div>
    );
}
export default Recipe;