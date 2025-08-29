import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HF_ACCESS_TOKEN) // use env variable (safe!)

export async function handler(event) {
  try {
    const { ingredientsArr } = JSON.parse(event.body) // get ingredients from frontend
    const ingredientsString = ingredientsArr.join(", ")

    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: "You are a recipe assistant..." },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe!` },
      ],
      max_tokens: 1024,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ recipe: response.choices?.[0]?.message?.content || "No recipe found." })
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    }
  }
}
