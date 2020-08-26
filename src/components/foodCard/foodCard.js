import React from 'react';
import './foodCard.css';

import {giveIngredients} from '../../functions/sharedFunctions'


const FoodCard = props => (
  <>
    {
      // this is an if statement
      props.available &&
      <div className="food-container">
        <div className="left">
          <h2>{props.name}</h2>
          <p>Contains: {giveIngredients(props.ingredients)}
          </p>
        </div>
        <div className="right">
          <p>Price: {props.price}</p>
        </div>
      </div>
    }
  </>
)

export default FoodCard;
