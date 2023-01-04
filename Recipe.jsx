import React from 'react';

function Recipe (props) {
    // destructuring an object
    const { name, ingredients, cookingTime,cookingMethod, calories, deleteRecipe } = props;

    return (
        <div class="recipie-tab" >
            <p>Name: {name}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Cooking Time: {cookingTime} hours</p>
            <p>Cooking Method: {cookingMethod} hours</p>
            <p>Calories: {calories} </p>
        </div>

        
    );
};

export default Recipe;