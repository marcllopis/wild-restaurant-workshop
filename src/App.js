import React from 'react';

import Header from './components/header/Header';
import ListOfFoods from './components/listOfFoods/ListOfFoods';
import './App.css';
import {foodList} from './data/foodList';

function App() {
  return (
    <>
      <Header text="The most amazing Wild Foods!"/>
      <ListOfFoods foods={foodList} range='15'/>
    </>
  );
}

export default App;
