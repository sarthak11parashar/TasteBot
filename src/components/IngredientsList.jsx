export default function IngredientsList(props){

    const ingredientsListItems = props.ingredients.map( (ingredient)=>{
        return <li key={ingredient}>{ingredient}</li>
    } )

    return(
                <section>
                    <h2 id="ingredients-heading">Ingredients on hand:</h2>
                    <ul className="ingredients-list">{ingredientsListItems}</ul>
                    {
                        props.ingredients.length >= 4 &&
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={props.getRecipe}>Get a recipe</button>
                        </div>
                    } 
                </section>
    )
}