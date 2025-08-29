export async function getRecipeFromMistral(ingredientsArr) {
  try {
    const response = await fetch("/.netlify/functions/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredientsArr })
    })

    const data = await response.json()
    return data.recipe
  } catch (err) {
    console.error(err.message)
  }
}
