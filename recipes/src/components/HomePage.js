import React from 'react';

const HomePage=(props)=>{
  // console.log(props.areas);
  // console.log(props.categories);
  // console.log(props.ingredients);
  return(
    <div>
      <div>Inside HomePage</div>

      <div>Search by category</div>

      <form onSubmit={(e)=>{props.searchCategory(e)}} >
        <label htmlFor='category'> </label>
        <select name='category'>
          {props.categories.map((category,index)=>(
            <option
              key={'category-seacrh-option-'+index}
              value={props.categories[index]}
            >
              {props.categories[index]}
            </option>
          ))}
        </select>
        <input type='submit' value='Search'/>
      </form>


      <div>Search by area</div>

      <form onSubmit={(e)=>{props.searchArea(e)}} >
        <label htmlFor='area'> </label>
        <select name='area'>
          {props.areas.map((area,index)=>(
            <option
              key={'area-seacrh-option-'+index}
              value={props.areas[index]}
            >
              {props.areas[index]}
            </option>
          ))}
        </select>
        <input type='submit' value='Search'/>
      </form>

    </div>
  )
}

export default HomePage;
