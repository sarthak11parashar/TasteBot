import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"


export default function Main(){

    const [ ingredients, setIngredients ] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)

    }


    function addIngredients(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredients} className="add-ingredient-form"> 
                <input
                 type="text"
                 placeholder="e.g. oregano" 
                 name="ingredient"/>
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientsList 
                                        ingredients={ingredients} 
                                        getRecipe={getRecipe}
                                        />}
                                        
            {recipe && <ClaudeRecipe recipe={recipe} /> }
           
        </main> 
    )
}