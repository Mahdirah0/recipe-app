import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { isMetaProperty } from 'typescript';
import './App.css';

import Recipes from './components/Recipes';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const recipeSearch = async () => {
    const request = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}`
    );

    const data = await request.json();
    console.log(data);

    setData(data.hits);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    recipeSearch();

    // setSearch('');
  };

  return (
    <div className='App'>
      <div className='form-container'>
        <h1>Search Food</h1>
        <form onSubmit={onFormSubmit}>
          <input type='text' value={search} onChange={handleInputChange} />
          <button>Submit</button>
        </form>
      </div>
      <div className='food'>
        {data.map((item: any, i) => (
          <Recipes
            key={i}
            name={item.recipe.label}
            image={item.recipe.image}
            cuisineType={item.recipe.cuisineType}
            calories={item.recipe.calories}
            dishType={item.recipe.dishType}
            mealType={item.recipe.mealType}
            ingredientLines={item.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
