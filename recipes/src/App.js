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
      areas: [],
      ingredients: [],
      categories: []
    }
  }
  async componentDidMount(){
    const categories=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    const areas=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const ingredients=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    this.setState({
      categories: categories.data.meals.map(category=>(category.strCategory)),
      ingredients: ingredients.data.meals.map(ingredient=>(ingredient.strIngredient)),
      areas: areas.data.meals.map(area=>(area.strArea))
    })
  }
  searchCategory=async(e)=>{
    e.preventDefault();
    const category=e.target.category.value;
    const mealResults=await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category)
    this.setState({
      mealResults: mealResults.data.meals
    })
  }
  searchArea=async(e)=>{
    e.preventDefault();
    const area=e.target.area.value;
    const mealResults=await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a='+area)
    this.setState({
      mealResults: mealResults.data.meals
    })
  }
  render(){
    console.log(this.state.mealResults)
    return (
      <div className="App">
        <header>
          The header...
        </header>
        <main>
          <HomePage
            categories={this.state.categories}
            ingredients={this.state.ingredients}
            areas={this.state.areas}
            searchCategory={this.searchCategory}
            searchArea={this.searchArea}
          />
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
