import React from 'react';
import { Route, Link } from 'react-router-dom';

const MealDisplay=(props)=>{
  const mealToDisplay = props.selectMeal.find(meal => {
    return meal.id === props.match.params.index;
  })
  console.log(mealToDisplay);

  return(
    <div>s
         {mealToDisplay ? (
                <div className="main">

                    <div className="recipe-wrapper">
                        <div className="image-text-wrapper">
                            <img src={mealToDisplay.strMealThumb} alt="A dish"/>
                            <h2 className="image-text">{mealToDisplay.strMeal}</h2>
                        </div>
                    </div>

                    <div>
                      <h3>Ingredients</h3>
                      <ol>
                        <li>{mealToDisplay.strIngredients1}</li>
                        <li>{mealToDisplay.strIngredients2}</li>
                        <li>{mealToDisplay.strIngredients3}</li>
                        <li>{mealToDisplay.strIngredients4}</li>
                        <li>{mealToDisplay.strIngredients5}</li>
                      </ol>
                    </div>

                    <div>
                      <h3>Measures</h3>
                        <ol>
                          <li>{mealToDisplay.strMeasure1}</li>
                          <li>{mealToDisplay.strMeasure2}</li>
                          <li>{mealToDisplay.strMeasure3}</li>
                          <li>{mealToDisplay.strMeasure4}</li>
                          <li>{mealToDisplay.strMeasure5}</li>
                        </ol>
                    </div>

                    <div>
                      <h3>Instructions</h3>
                      <p>{mealToDisplay.strInstructions}</p>
                    </div>

                    <div className="video-link-container">
                        <form  action={mealToDisplay.strYoutube}>
                            <input className="youtube-link" type="submit" value="View video" />
                        </form>
                    </div>                   

                    <div className="return-wrapper">
                      <Link className="return-to-HomePage" to="/">Return to Home Page</Link>
                    </div>

                </div>
             
            ) : 
            <p>Loading recipe...</p>
            }   
    </div>
  )
}

export default MealDisplay;
