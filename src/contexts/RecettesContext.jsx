/**
 * Context pour récupérer toutes les recettes avec un fetch à partir du fichier json
 * Fonction pour créer mon tableau de recettes selectionnées
 */

import { createContext, useContext, useEffect, useState } from "react";
import { useIngredients } from "./IngredientsContext";

const RecettesContext = createContext()

//Je crée la fonction provider

import React from 'react'

export default function RecettesProvider({children}) {

    const[recettesAll, setRecettesAll] = useState()
    const[selectionRecettes, setSelectionRecettes] = useState()
    const[favoriRecettes, setFavoriRecettes] = useState()

    const{listIngredients} = useIngredients()

    useEffect(()=>{
        fetch('../recettes_cuisine.json')
            .then(response => response.json())
            .then(data => setRecettesAll(data));
    },[])

    function filtrerRecettes(){
      if (!recettesAll) return;

      //Si ma liste d'ingredients est vide, ma selection est recettesAll
      if (listIngredients.length === 0) {
        setSelectionRecettes(recettesAll);
        return;
      }

      /**Je veux comparer la liste de mes ingredients nomsIngredients aux ingredients de chaque recette 
       * et si tous les ingredients de ma liste sont dans la recette, je prends la recette et je la mets dans mon
       * tableau selectionRecettes
       *   */

      //1- j'enleve les majuscules de mes ingredients
      const nomsIngredients = listIngredients.map((i)=>i.nom.toLowerCase())

      // 2. Je crée un tableau vide pour stocker les recettes sélectionnées
      const selection = [];

      //3. Je parcours toutes les recettes
      for (let i=0; i < recettesAll.length; i++){
        const recette = recettesAll[i];
        //4- Je récupère les noms des ingredients de la recette
        const nomsIngRecette = recette.ingredients.map((ing) => ing.nom.toLowerCase())
        //5- Je vérifie si tous les ingredients selectionnés sont dans la recette
        let ingredientsOk = true;

        for (let j=0; j < nomsIngredients.length; j++){
          const nomIngredient = nomsIngredients[j];
          //Si un ingredient n'est pas dans la recette, je passe ingredient ok à false et j'arrete la vérification pour cette recette
          if(!nomsIngRecette.includes(nomIngredient)){
            ingredientsOk = false;
            break;
          }
        }

        //Si il y a tous les ingredients, j'ajoute la recette à ma selection
        if(ingredientsOk){
          selection.push(recette);
        }
      }
      //Je mets à jour mon state
      setSelectionRecettes(selection)

    }
      
  return (
    <RecettesContext.Provider value={{recettesAll, selectionRecettes, favoriRecettes, filtrerRecettes}}>
        {children}
    </RecettesContext.Provider>
  )
}

//Je crée le hook personnalisé
export function useRecettes(){
    return useContext(RecettesContext)
}
