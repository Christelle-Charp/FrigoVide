/**
 * Composant d'un input + un bouton
 */

import React from 'react'
import { useIngredients } from '../../contexts/IngredientsContext'
import PrimaryBouton from '../boutons/PrimaryBouton'

export default function Formulaire() {

    const{ingredient, handleChange, addIngredientToList} = useIngredients()

  return (
    <div className='formulaire'>
        <input
            type="text"
            value={ingredient}
            onChange={handleChange}
            required
            placeholder="Mon ingredient"
        />
        <PrimaryBouton onClick={addIngredientToList}>
            Ajouter
        </PrimaryBouton>
    </div>
  )
}
