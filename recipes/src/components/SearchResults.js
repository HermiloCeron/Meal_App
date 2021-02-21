import React from 'react';
import { Route, Link } from 'react-router-dom';

const SearchResults=(props)=>{
  return(
    <div>
      <div>Inside SearchResults</div>

      <Link className="return-to-HomePage" to="/">Return to Home Page</Link>

    </div>
  )
}

export default SearchResults;
