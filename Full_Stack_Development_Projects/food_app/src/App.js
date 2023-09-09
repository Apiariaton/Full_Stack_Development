import logo from './logo.svg';
import './App.css';
import Restaurant from './components/Restaurant';
import FoodDataProvider from './components/Store/food-data';
import React, {useState} from 'react';

function App() {
 
  return (
    <div className="App">
     <FoodDataProvider>
      <Restaurant/>
      </FoodDataProvider>
    </div>
  );
}

export default App;
