import React from 'react';
import { Route, Link } from 'react-router-dom';

const MealDisplay=(props)=>{
  return(
    <div>
      <div>Inside MealDisplay</div>

      <Link classname="return-to-HomePage" to="/">Return to Home Page</Link>

    </div>
  )
}

export default MealDisplay;
