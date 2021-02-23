import React from 'react';

const SideImage=(props)=>{
  return(
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {props.randomMealArray.map((meal,index)=>(
            <div
              className={index==0 ? "carousel-item active" : "carousel-item"}
              key={"image"+meal.idMeal}
              onClick={(e) => {props.selectMealById(e, meal.idMeal)}}
            >
              <img src={meal.strMealThumb} className="d-block w-25" alt="..." />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideImage;
