import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"
import LoadingMessage from "./components/LoadingMessage"
import ResetButton from "./components/ResetButton"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    async function getRecipe() {
        setLoading(true)
        setRecipe("")
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setLoading(false)
    }

    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient");
        if (newIngredient.trim() === "") return;
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function resetAll() {
        setIngredients([])
        setRecipe("")
    }

    return (
        <main>
            <form action={addIngredients} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient" />
                <button>Add ingredient</button>
            </form>

            {ingredients.length === 0 && (
                <p className="initial-hint">
                    Add minimum 4 ingredients to get a recipe
                </p>
            )}

            {ingredients.length > 0 && <IngredientsList
                ingredients={ingredients}
                getRecipe={getRecipe}
            />}

            {loading && <LoadingMessage />}

            {!loading && recipe && (
                <>
                    <ClaudeRecipe recipe={recipe} />
                    <ResetButton onReset={resetAll} />
                </>
            )}


        </main>
    )
}
