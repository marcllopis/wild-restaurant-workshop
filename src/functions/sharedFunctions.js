import React from 'react';

export const giveIngredients = ingredients => (
  ingredients.map(ingredient =>
    <span> - {ingredient.toUpperCase()} </span>)
);
