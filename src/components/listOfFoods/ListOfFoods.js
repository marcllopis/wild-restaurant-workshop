import React from 'react';
import FoodCard from '../foodCard/foodCard';



const ListOfFoods = props => (
  <>
    {
      props.foods.filter(food => (food.price > props.range)).map(food =>
        <FoodCard
          name={food.name}
          price={food.price}
          ingredients={food.ingredients}
          available={food.isAvailable}
        />
      )
    }
  </>
);

export default ListOfFoods;
