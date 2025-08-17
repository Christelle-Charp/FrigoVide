/**
 * Page qui affiche la liste des recettes favoris
 * On peut cliquer sur la card de la recette pour afficher le détail de la recette
 * On peut revenir à la page AjouterIngredients
 */

import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from 'react-router';
import RecetteListFavoris from '../components/listes/RecetteListFavoris';

export default function Favoris() {
  return (
    <div className='favoris'>
      <div className='contenair'>
        <div className='head'>
          <NavLink
            to="/ajouterIngredients">
            <FiArrowLeft className='icone'/>
          </NavLink>
          <h3>Mes recettes favorites</h3>
        </div>
        <RecetteListFavoris/>
      </div>

    </div>
  )
}
