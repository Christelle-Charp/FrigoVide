/**
 * Composant pour afficher la carte d'une recette
 * Elle doit etre un lien pour aller sur le détail de la recette
 */

import React from 'react'
import { NavLink } from 'react-router'

export default function RecetteCard({recette}) {
  return (
    <NavLink className="card-recette-link"
    to={`/recette/${recette.id}`}>
        <div className='card-recette'>
            <img src={recette.image} alt={`photo de ${recette.nom}`} />
            <h4>{recette.nom}</h4>
        </div>
    </NavLink>
    
  )
}
