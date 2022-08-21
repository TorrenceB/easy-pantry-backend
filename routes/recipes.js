import express from "express";
import fetch from "node-fetch";

const router = express.Router();
const recipeKey = process.env.VUE_APP_RECIPE_KEY;
const recipes = {};

await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${recipeKey}`)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((res) => {
    Object.assign(recipes, res, {});
  })
  .catch((err) => console.log("Error: ", err));

/* All routes here begin with /recipes */
router.get("/", (req, res) => {
  res.send(recipes);
});

export default router;
