/**
 * Composant pour afficher une liste d'ingredients avec la posibilité d'en supprimer
 */

import React from 'react'
import { useIngredients } from '../../contexts/IngredientsContext'

export default function IngredientList() {

    const {listIngredients, deleteIngredient} = useIngredients()

  return (
    <div className='contenair-ingredients'>
        <h3>Dans mon frigo, il y a :</h3>
        <ul>
            {listIngredients.map((ingredient)=>(
                <li
                key={ingredient.id}>
                    <p>{ingredient.nom}</p>
                    <button onClick={()=>deleteIngredient(ingredient.id)}>X</button>
                </li>
            ))

            }
        </ul>
    </div>
  )
}
