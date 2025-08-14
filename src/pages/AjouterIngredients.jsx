/**
 * Page dans laquelle on peut rentrer une liste d'ingredient et lancer la recherche
 * Dans la liste d'ingredients, on peut en supprimer
 */
import React from 'react'
import { useIngredients } from '../contexts/IngredientsContext'
import Formulaire from '../components/textes/Formulaire'
import IngredientList from '../components/listes/IngredientList'
import PrimaryBouton from '../components/boutons/PrimaryBouton'
import { useNavigate } from 'react-router'
import { useRecettes } from '../contexts/RecettesContext'



export default function AjouterIngredients() {
    const {filtrerRecettes} = useRecettes()
    const navigate = useNavigate()
    //fonction qui filtre la recherche et qui ensuite envoie sur la page de la liste des recettes
    function lancerRecherche(){
        filtrerRecettes();
        navigate("/recettes");
    }

  return (
    <div className='ajouter-ingredients'>
        <div className='contenair '>
            <h3>Ajoutez vos ingredients</h3>
            <Formulaire/>
            <IngredientList/>
            <PrimaryBouton className="gros" onClick={lancerRecherche}>GO</PrimaryBouton>
        </div>
    </div>
    
  )
}
