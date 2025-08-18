/**
 * Page qui affiche la liste de recettes contenant les ingredients choisis
 * On peut cliquer sur une recette pour afficher les détails de la recette
 * On peut également revenir sur la page AjouterIngredients
 */

import React from 'react'
import RecetteList from '../components/listes/RecetteList'
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from 'react-router';

export default function Recettes() {
    
  return (
    <div className='recettes'>
      <div className='contenair'>
        <div className='head'>
          <NavLink
            to="/ajouter-ingredients">
            <FiArrowLeft className='icone'/>
          </NavLink>
          <h3>Recettes sélectionnées</h3>
        </div>
        <RecetteList/>
      </div>
      
    </div>
    
  )
}
