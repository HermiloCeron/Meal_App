import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
    console.log(props.mealResults);
  return (
      <div>
          { props.mealResults.map(meals => (
              <div className='grid-list' key={meals.idMeal} onClick={(e) => {props.selectMealById(e, meals.idMeal)}}>
                <div className='image-text-wrapper'>
                  {/* <Link to={`/results/${meals.idMeal}`}> */}
                      {meals.strMealThumb && <img className='grid-image' src={meals.strMealThumb} alt='Meal' />}
                  <h4 className='image-text'>{meals.strMeal}</h4> 
                  {/* </Link> */}
                  </div> 
                  
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
