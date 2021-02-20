import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';
import MealDisplay from './components/MealDisplay';

function App() {
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

export default App;
