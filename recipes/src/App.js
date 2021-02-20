import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';
import MealDisplay from './components/MealDisplay';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mealResults: [],
      selectMeal: {},
      area: '',
      ingredient: '',
      category: ''
    }
  }
  async componentDidMount(){
    const categories=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    const areas=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const ingredients=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    console.log(categories);
  }
  render(){
    return (
      <div className="App">
        <header>
          The header...
        </header>
        <main>
          <HomePage />
          <SearchResults />
          <MealDisplay />
        </main>
        <footer>
          The footer...
        </footer>
      </div>
    );
  }
}

export default App;
