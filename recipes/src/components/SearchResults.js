import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = props => {
    
  return (
      <div>
          { props.mealResults.map(park => (
              <div className='grid-list' key={park.ParkCode}>
                  <Link to={`/park/${park.id}`}>
                      {park.images[0] && <img className='grid-image' src={park.images[0].url} alt='National Park' />}
                  <h2>{park.name}</h2>
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
