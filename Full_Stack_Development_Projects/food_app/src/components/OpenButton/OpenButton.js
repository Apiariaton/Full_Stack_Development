import "./OpenButton.css";
import React, {useContext, useEffect, useState} from 'react';
import FoodDataProvider, {FoodData} from '../Store/food-data';

function OpenButton(props)
{

const foodData = useContext(FoodData);    


const d = new Date();    
const hour = d.getHours();

const [restaurantOpen, setOpen] = useState(1 < hour < 24);
  

function getCurrentDayAndTime(restaurant_times)
{
    const today = new Date();
    const hour = today.getHours(); 
    const day = today.getDay();
    if (
        day == 0 &&
        restaurant_times.sunday[0] <= hour && hour < restaurant_times.sunday[1]
      ) {
        setOpen(true);
      } else if (
        day == 1 &&
        restaurant_times.monday[0] <= hour && hour < restaurant_times.monday[1]
      ) {
        setOpen(true);
      } else if (
        day == 2 &&
        restaurant_times.tuesday[0] <= hour && hour < restaurant_times.tuesday[1]
      ) {
        setOpen(true);
      } else if (
        day == 3 &&
        restaurant_times.wednesday[0] <= hour && hour < restaurant_times.wednesday[1]
      ) {
        setOpen(true);
      } else if (
        day == 4 &&
        restaurant_times.thursday[0] <= hour && hour < restaurant_times.thursday[1]
      ) {
        setOpen(true);
      } else if (
        day == 5 &&
        restaurant_times.friday[0] <= hour && hour < restaurant_times["friday"][1]
      ) {
        setOpen(true);
      } else if (
        day == 6 &&
        restaurant_times.saturday[0] <= hour && hour < restaurant_times.saturday[1]
      ) {
        setOpen(true);
      } else {
        setOpen(false);
      }
}

useEffect(()=>{getCurrentDayAndTime(foodData.restaurant_times)},[]);

return (
    <div className={`openButton ${restaurantOpen ? "open" : "closed"}`}> 
        {restaurantOpen ? "Open" : "Closed"}
    </div>
    )
}

export default OpenButton;