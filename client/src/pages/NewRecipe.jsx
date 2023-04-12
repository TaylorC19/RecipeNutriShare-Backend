import Header from '../components/Header'
import Ingredients from '../components/Ingredients';


const NewRecipe = () => {
  return (
    <div>
      <Header />
      <h1>New Recipe</h1>
      <div>
        <Ingredients></Ingredients>
      </div>
    </div>
  );
}

export default NewRecipe;