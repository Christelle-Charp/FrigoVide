/**
 * Page dans laquelle on peut rentrer une liste d'ingredient et lancer la recherche
 * Dans la liste d'ingredients, on peut en supprimer
 */
import React from 'react'
import { useIngredients } from '../contexts/IngredientsContext'
import Formulaire from '../components/textes/Formulaire'
import IngredientList from '../components/listes/IngredientList'
import BoutonLink from '../components/boutons/BoutonLink'

export default function AjouterIngredients() {
  return (
    <div className='ajouter-ingredients'>
        <div className='contenair '>
            <h3>Ajoutez vos ingredients</h3>
            <Formulaire/>
            <IngredientList/>
            <BoutonLink className="gros">GO</BoutonLink>
        </div>
    </div>
    
  )
}
