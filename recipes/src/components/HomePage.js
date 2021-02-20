import React from 'react';

const HomePage=(props)=>{
  console.log(props.areas);
  console.log(props.categories);
  console.log(props.ingredients);
  return(
    <div>
      <div>Inside HomePage</div>
      <div>Search by category</div>
      <form>
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
    </div>
  )
}

export default HomePage;
