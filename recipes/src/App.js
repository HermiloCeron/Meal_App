
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';
import MealDisplay from './components/MealDisplay';
import SideImage from './components/SideImage';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mealResults: [],
      selectMeal: {},
      areas: [],
      ingredients: [],
      categories: [],
      beer: {},
      dataLoaded: false,
      randomMealArray:[]
    }
  }
  async componentDidMount(){
    const ingredients=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const categories=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    const areas=await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    // Random meals for SideImage
    const randomMealArray=[];
    let randomMeal={}
    for(let i=0;i<=5;i++){
      randomMeal=await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
      randomMealArray.push(randomMeal.data.meals[0]);
    }
    console.log(randomMealArray)
    //Testing weather ticker, jokes, or advertisements
    // const quote =await axios.get("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
    let beer = await axios.get('https://api.punkapi.com/v2/beers/random');
    if(beer.data[0].image_url==null){
      beer.data[0].image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Duff_beer.jpg/110px-Duff_beer.jpg";
    }
    console.log("beer",beer.data[0]);
    this.setState({
      categories: categories.data.meals.map(category=>(category.strCategory)),
      areas: areas.data.meals.map(area=>(area.strArea)),
      ingredients: ingredients.data.meals.map(ingredient=>(ingredient.strIngredient)),
      beer: beer.data[0],
      dataLoaded: true,
      randomMealArray: randomMealArray
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
    console.log(this.state.beer)
    return (
      <div className="App">
        <header>
          <h1>International Cookbook</h1>
          <div className="return-wrapper">
                      <Link className="return-to-HomePage" to="/">Return to Home Page</Link>
                    </div>
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
        <br></br>
        <br></br>
        <aside>
          <SideImage
            randomMealArray={this.state.randomMealArray}
            selectMealById={this.selectMealById}
          />
        </aside>
        <footer>
          <p> Sponsored by: </p>
          <div>
            <img id='sponsor' src={this.state.beer.image_url} />
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter (App);
