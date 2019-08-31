const express = require("express");

const db = require("../recipes/recipe-router.js")

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });
  

  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Recipess.getShoppingList(id)
    .then(shopping => {
      if (shopping) {
        res.json(shopping);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
  });
  
  
  
  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.getInstructions(id)
    .then(instruction => {
      if (instruction.length) {
        res.json(instruction);
      } else {
        res.status(404).json({ message: 'Could not find instructions for given recipe' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get steps' });
    });
  });
 
module.exports = router;