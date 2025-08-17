/**
 * Pages qui affiche les détails d'une recette
 * On peut ajouter la recette dans sa liste de favoris
 * On peut également revenir sur la page des recettes 
 */

import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { NavLink, useParams } from 'react-router';
import { BiTimeFive } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { PiThermometerHotFill } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { useRecettes } from '../contexts/RecettesContext';

export default function RecetteDetail({}) {
  //Je écupère l'id dans l'url
  const{id} = useParams();
  //Je récupère toutes les recettes
  const {recettesAll, favoriRecettes, addFavoris, removeFavoris} = useRecettes()
  //Je cherche ma recette dans toutes les recettes
  const recette = recettesAll.find((r)=>r.id === parseInt(id));

  if(!recette){
    return <p>Recette introuvable</p>
  }

  const isFavori = favoriRecettes.includes(recette.id)

  const handleFavoriClick = () =>{
    if (isFavori){
      removeFavoris(recette.id);
    }else{
      addFavoris(recette.id);
    }
  }

  return (
    <div className='recette-detail'>
      <div className='contenair'>
        <div className='head'>
          <NavLink
            to="/recettes">
            <FiArrowLeft className='icone'/>
          </NavLink>
          <h3>{recette.nom}</h3>
        </div>
        <div className='presentation-recette'>
          <img src={recette.image} alt={`Photo de ${recette.nom}`} />
          <div className='content'>
            <div className='info'>
              <div className='align'>
                <BiTimeFive className='icone'/>
                <p>{recette.temps_preparation}</p>
              </div>
              <div className='align'>
                <FiUser className='icone'/>
                <p>{recette.nombre_personnes} personnes</p>
              </div>
              <div className='align'>
                <PiThermometerHotFill className='icone'/>
                <p>{recette.temps_cuisson}</p>
              </div>
            </div>
            <div className='favori align'>
              <FiBookmark  className='icone'/>
              <button className='btn-favori' onClick={handleFavoriClick}>
                {isFavori ? "supprimer des favoris" : "ajouter aux favoris"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='descriptif-recette'>
        <h3>Les ingredients</h3>
        <div className='contenair-ingredients'>
          {recette.ingredients.map((ingredient, index)=>(
            <div className='align'
              key={index}>
              <span>{ingredient.illustration}</span>
              <div className='detail-ingredients'>
                <p>{ingredient.quantite} {ingredient.unite} {ingredient.nom}</p>
              </div>
            </div>
          ))
          }
        </div>
        <h3>Les étapes</h3>
        <div className='contenair-etapes'>
          {recette.etapes.map((etape, index)=>(
            <p
              key={index}>
                {etape}
            </p>
          ))
          }
        </div>
      </div>
    </div>
  )
}
