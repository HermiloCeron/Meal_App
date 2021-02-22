import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
    console.log(props.mealResults);
  return (
      <div>
          { props.mealResults.map(meals => (
              <div className='grid-list' key={meals.idMeal}>
  
                  <Link to={`/results/${meals.idMeal}`}>
                      {meals.strMealThumb && <img className='grid-image' src={meals.strMealThumb} alt='Meal' />}
                  <h2>{meals.strMeal}</h2>
                  </Link>
              </div>

          )) }
      </div>
  )

}



// const SearchResults=(props)=>{
//   return(
//     <div>Inside SearchResults</div>
//   )
// }

export default SearchResults;
