import React from 'react';
import { Route, Link } from 'react-router-dom';

const MealDisplay=(props)=>{
  const mealToDisplay =props.mealToDisplay
  // const mealToDisplay = props.selectMeal.find(meal => {
  //   return meal.id === props.match.params.index;
  // })
  console.log(props.mealToDisplay);

  let video_url = "";
  let video_id = "";
  if( mealToDisplay.strYoutube.length > 0)  { video_id = mealToDisplay.strYoutube.split('v=')[1];  
  let ampersandPosition = video_id.indexOf('&'); 
  if(ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    };
    
  video_url = "https://www.youtube.com/embed/"+video_id} else { 

  video_url = "https://www.youtube.com/embed/ZWcRmoLqhkc"}
    console.log(video_url);
  
  

  return(
    <div>
         {props.mealToDisplay ? (
                <div className="md-main">

                    <div className="md-recipe-wrapper">
                        <div className="md-image-text-wrapper">
                            <img clasName="md-image-cover" src={mealToDisplay.strMealThumb} alt="A dish"/>
                            <h1 className="md-image-text">{mealToDisplay.strMeal}</h1>
                        </div>
                    </div>

                    <div className="md-ingredient-display">
                      <h3 className="md-ingredient-header">Ingredients and Measurements</h3>
                      <ol>       
                        {mealToDisplay.strIngredient1 === null 
                        ? null 
                        : mealToDisplay.strIngredient1.length > 0 
                        ? (<li>{mealToDisplay.strIngredient1}, {mealToDisplay.strMeasure1}</li>) 
                        : null }
                        {mealToDisplay.strIngredient2 === null 
                        ? null 
                        : mealToDisplay.strIngredient2.length > 0 
                        ? (<li>{mealToDisplay.strIngredient2}, {mealToDisplay.strMeasure2}</li>) 
                        : null } 
                        {mealToDisplay.strIngredient3 === null 
                        ? null 
                        : mealToDisplay.strIngredient3.length > 0 
                        ? (<li>{mealToDisplay.strIngredient3}, {mealToDisplay.strMeasure3}</li>) 
                        : null }
                        {mealToDisplay.strIngredient4 === null 
                        ? null 
                        : mealToDisplay.strIngredient4.length > 0 
                        ? (<li>{mealToDisplay.strIngredient4}, {mealToDisplay.strMeasure4}</li>) 
                        : null }
                        {mealToDisplay.strIngredient5 === null 
                        ? null 
                        : mealToDisplay.strIngredient5.length > 0 
                        ? (<li>{mealToDisplay.strIngredient5}, {mealToDisplay.strMeasure5}</li>) 
                        : null }
                        {mealToDisplay.strIngredient6 === null 
                        ? null 
                        : mealToDisplay.strIngredient6.length > 0 
                        ? (<li>{mealToDisplay.strIngredient6}, {mealToDisplay.strMeasure6}</li>) 
                        : null }
                        {mealToDisplay.strIngredient7 === null 
                        ? null 
                        : mealToDisplay.strIngredient7.length > 0 
                        ? (<li>{mealToDisplay.strIngredient7}, {mealToDisplay.strMeasure7}</li>) 
                        : null }
                        {mealToDisplay.strIngredient8 === null 
                        ? null 
                        : mealToDisplay.strIngredient8.length > 0 
                        ? (<li>{mealToDisplay.strIngredient8}, {mealToDisplay.strMeasure8}</li>) 
                        : null }
                        {mealToDisplay.strIngredient9 === null 
                        ? null 
                        : mealToDisplay.strIngredient9.length > 0 
                        ? (<li>{mealToDisplay.strIngredient9}, {mealToDisplay.strMeasure9}</li>) 
                        : null }
                        {mealToDisplay.strIngredient10 === null 
                        ? null 
                        : mealToDisplay.strIngredient10.length > 0 
                        ? (<li>{mealToDisplay.strIngredient10}, {mealToDisplay.strMeasure10}</li>) 
                        : null }
                        {mealToDisplay.strIngredient11 === null 
                        ? null 
                        : mealToDisplay.strIngredient11.length > 0 
                        ? (<li>{mealToDisplay.strIngredient11}, {mealToDisplay.strMeasure11}</li>) 
                        : null }
                        {mealToDisplay.strIngredient13 === null 
                        ? null 
                        : mealToDisplay.strIngredient13.length > 0 
                        ? (<li>{mealToDisplay.strIngredient13}, {mealToDisplay.strMeasure13}</li>) 
                        : null }
                        {mealToDisplay.strIngredient14 === null 
                        ? null 
                        : mealToDisplay.strIngredient14.length > 0 
                        ? (<li>{mealToDisplay.strIngredient14}, {mealToDisplay.strMeasure14}</li>) 
                        : null }
                        {mealToDisplay.strIngredient15 === null 
                        ? null 
                        : mealToDisplay.strIngredient15.length > 0 
                        ? (<li>{mealToDisplay.strIngredient15}, {mealToDisplay.strMeasure15}</li>) 
                        : null }
                        {mealToDisplay.strIngredient16 === null 
                        ? null 
                        : mealToDisplay.strIngredient16.length > 0 
                        ? (<li>{mealToDisplay.strIngredient16}, {mealToDisplay.strMeasure16}</li>) 
                        : null }
                        {mealToDisplay.strIngredient17 === null 
                        ? null 
                        : mealToDisplay.strIngredient17.length > 0 
                        ? (<li>{mealToDisplay.strIngredient18}, {mealToDisplay.strMeasure18}</li>) 
                        : null }
                        {mealToDisplay.strIngredient19 === null 
                        ? null 
                        : mealToDisplay.strIngredient19.length > 0 
                        ? (<li>{mealToDisplay.strIngredient19}, {mealToDisplay.strMeasure19}</li>) 
                        : null }
                        {mealToDisplay.strIngredient20 === null 
                        ? null 
                        : mealToDisplay.strIngredient20.length > 0 
                        ? (<li>{mealToDisplay.strIngredient20}, {mealToDisplay.strMeasure20}</li>) 
                        : null }                       
                      </ol>
                    </div>

                    <div className="md-recipe-instructions">
                      <h3 className="md-instructions-header">Instructions</h3>
                      <p>{mealToDisplay.strInstructions}</p>
                    </div>

                    {<iframe className="video-container" width="560" height="315" 
                    src={video_url}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>} 

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
