/**
 * Composant pour afficher une liste de recettes 
 */

import React, { useEffect, useState } from 'react'
import RecetteCard from '../cards/RecetteCard'
import { useRecettes } from '../../contexts/RecettesContext'

export default function RecetteList() {

  const {recettesAll, favoriRecettes} = useRecettes()
  

  console.log("Recettes favorites :", favoriRecettes);

  //Comme mon tableau ne contient que les id, je recontruis ma liste de recette
  const recettesFavoris = favoriRecettes
  .map(id =>recettesAll.find(r=>r.id == id))
  .filter(Boolean)


  return (
    <div className='contenair-recettes'>
      
      {recettesFavoris.length === 0 ? (
        <p>Aucune recette en favoris.</p>
      ) : (
        recettesFavoris.map((recette) => (
          <RecetteCard
            key={recette.id}
            recette={recette}
          />
        ))
      )}

        
    </div>
  )
}
