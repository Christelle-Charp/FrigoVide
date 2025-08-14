/**
 * Page qui affiche la liste de recettes contenant les ingredients choisis
 * On peut cliquer sur une recette pour afficher les détails de la recette
 * On peut également revenir sur la page AjouterIngredients
 */

import React from 'react'
import RecetteList from '../components/listes/RecetteList'

export default function Recettes() {
    
  return (
    <RecetteList/>
  )
}
