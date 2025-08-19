/**
 * Composant pour afficher une liste de recettes 
 */

import React from 'react'
import RecetteCard from '../cards/RecetteCard'
import { useRecettes } from '../../contexts/RecettesContext'

export default function RecetteList() {

  const {selectionRecettes} = useRecettes()
  console.log("Recettes sélectionnées :", selectionRecettes);


  return (
    <div className='contenair-recettes'>
      
        {selectionRecettes.length === 0 ? (
          <p>Aucune recette ne correspond à votre recherche.</p>
        ) : (
        selectionRecettes.map((recette)=>(
            <RecetteCard
            key={recette.id}
            recette={recette}/>
        ))
            
        )}
        
    </div>
  )
}
