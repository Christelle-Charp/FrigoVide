/**
 * Composant pour afficher la carte d'une recette
 * Elle doit etre un lien pour aller sur le détail de la recette
 */

import React from 'react'
import { NavLink } from 'react-router'
import { useRecettes } from '../../contexts/RecettesContext'
import { BsBookmarkFill } from "react-icons/bs";

export default function RecetteCard({recette}) {

  const {isFavori} = useRecettes()

  return (
    <NavLink className="card-recette-link"
    to={`/recette/${recette.id}`}>
        <div className='card-recette'>
            <img src={recette.image} alt={`photo de ${recette.nom}`} />
            <h4>{recette.nom}</h4>
            <div className='fanion favori'>
              {(isFavori(recette.id) && <BsBookmarkFill className='icone' /> )
              }
            </div>
        </div>
        
    </NavLink>
    
  )
}
