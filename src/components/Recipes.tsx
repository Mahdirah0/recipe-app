import './Recipes.css';

interface IProps {
  name: string;
  image: string;
  cuisineType: string;
  calories: number;
  dishType: string;
  mealType: string;
  ingredientLines: [];
}

const Recipes: React.FC<IProps> = ({
  name,
  image,
  cuisineType,
  calories,
  dishType,
  mealType,
  ingredientLines,
}) => {
  calories = Math.trunc(calories);

  return (
    <div className='recipe-container'>
      <div className='image-container'>
        <img src={`${image}`} />
      </div>
      <div className='recipe-content'>
        <div className='initial-info'>
          <h2>{name}</h2>
          <span>Calories: {calories}</span>
        </div>
        <div className='type-of-food'>
          <h4>{cuisineType}</h4>
          <div>
            <h4>{dishType}</h4>
            <h4>{mealType}</h4>
          </div>
        </div>
        <div className='ingridients'>
          <h3>Ingridients</h3>
          <ul>
            {ingredientLines.map((item: any, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
