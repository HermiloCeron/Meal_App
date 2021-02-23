import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

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
      categories: [],
      joke: '',
      dataLoaded: false
    }
  }
  async componentDidMount(){
    const ingredients=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const categories=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    const areas=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    //Testing weather ticker, jokes, or advertisements
    // const quote =await axios.get("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
    const joke = await axios.get('https://icanhazdadjoke.com', {
      headers: {
          Accept: 'application/json'
      }

    })

  // this.setState({
  //   joke: joke.data.joke,
  // })



    this.setState({
      categories: categories.data.meals.map(category=>(category.strCategory)),
      areas: areas.data.meals.map(area=>(area.strArea)),
      ingredients: ingredients.data.meals.map(ingredient=>(ingredient.strIngredient)),
      joke: joke.data.joke,
      dataLoaded: true
    })
  }
  searchCategory=async(e)=>{
    e.preventDefault();
    const category=e.target.category.value;
    const mealResults=await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category);
    this.setState({
      mealResults: mealResults.data.meals
    })
    this.props.history.push('/results');
  }
  searchArea=async(e)=>{
    e.preventDefault();
    const area=e.target.area.value;
    const mealResults=await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a='+area);
    this.setState({
      mealResults: mealResults.data.meals
    })
    this.props.history.push('/results');
  }
  searchIngredient=async(e)=>{
    e.preventDefault();
    const ingredient=e.target.ingredient.value;
    const mealResults=await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ingredient);
    this.setState({
      mealResults: mealResults.data.meals
    })
    this.props.history.push('/results');
  }
  selectMealById=async(e,idMeal)=>{
    e.preventDefault();
    const meal=await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+idMeal)
    this.setState({
      selectMeal: meal.data.meals[0]
    })
    this.props.history.push('/results/' + idMeal);
  }


  render(){
    console.log('meal results:',this.state.mealResults)
    console.log('random meal:',this.state.selectMeal)
    return (
      <div className="App">
        <header>
          The header...
        </header>
        <main>
          {this.state.dataLoaded
            ?
              <Route exact path="/" render={() => (
                <HomePage
                  categories={this.state.categories}
                  ingredients={this.state.ingredients}
                  areas={this.state.areas}
                  searchCategory={this.searchCategory}
                  searchArea={this.searchArea}
                  searchIngredient={this.searchIngredient}
                  selectMealById={this.selectMealById}
                /> )}
              />
            :
              "Data loading ..."
          }
          <Route exact path="/results" render={() => (
            <SearchResults mealResults={this.state.mealResults} selectMealById={this.selectMealById}/> )} />


          <Route path="/results/:index" render={(routerProps) => (
            <MealDisplay
              mealResults={this.state.mealResults}
              mealToDisplay={this.state.selectMeal}
              {...routerProps}
            /> )} />
        </main>
        <footer>
          The footer...
          <h5>Dad Jokes</h5>
        <p>{this.state.joke}</p>
        {/* <p>{quote.data.content}</p> */}

        
        </footer>
      </div>
    );
  }
}

export default withRouter (App);
