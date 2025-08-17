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

    const[recettesAll, setRecettesAll] = useState([])
    const[selectionRecettes, setSelectionRecettes] = useState([])
    const[favoriRecettes, setFavoriRecettes] = useState([])

    const{listIngredients} = useIngredients()

    useEffect(()=>{
        fetch('../recettes_cuisine.json')
            .then(response => response.json())
            .then(data => setRecettesAll(data));
    },[])

    function filtrerRecettes(){

      console.log("🔍 Fonction filtrerRecettes appelée");


      // Vérifie si les recettes sont bien chargées
      if (!recettesAll || recettesAll.length === 0) {
        console.warn("⚠️ recettesAll est vide ou non défini :", recettesAll);
        return;
      }

      // Vérifie les ingrédients sélectionnés
      console.log("🧂 Ingrédients sélectionnés :", listIngredients);


      //Si ma liste d'ingredients est vide, ma selection est recettesAll
      if (listIngredients.length === 0) {
        console.log("📋 Aucun ingrédient sélectionné, toutes les recettes sont affichées");

        setSelectionRecettes(recettesAll);
        return;
      }

      /**Je veux comparer la liste de mes ingredients nomsIngredients aux ingredients de chaque recette 
       * et si tous les ingredients de ma liste sont dans la recette, je prends la recette et je la mets dans mon
       * tableau selectionRecettes
       *   */

      //1- j'enleve les majuscules de mes ingredients
      const normaliser = (str) => str.trim().toLowerCase()
      const nomsIngredients = listIngredients.map((i)=> normaliser(i.nom))
      console.log("🔡 Noms des ingrédients normalisés :", nomsIngredients);

      // 2. Je crée un tableau vide pour stocker les recettes sélectionnées
      let selection = [];

      //3. Je parcours toutes les recettes
      for (let i=0; i < recettesAll.length; i++){
        const recette = recettesAll[i];
        //4- Je récupère les noms des ingredients de la recette
        const nomsIngRecette = recette.ingredients.map((ing) => normaliser(ing.nom))
        //5- Je vérifie si un des ingredients selectionnés est dans la recette
        const match = nomsIngredients.some((nomIngredients)=>
          nomsIngRecette.some((ingRecette) => ingRecette.includes(nomIngredients))
        )

        if(match){
          selection = [...selection, recette];
          console.log(`✅ Recette ajoutée : ${recette.nom}`);
        }else{
          console.log(`❌ Aucun ingrédient trouvé dans : ${recette.nom}`);

        }

        /*
        //5- Je vérifie si tous les ingredients selectionnés sont dans la recette
        let ingredientsOk = true;

        for (let j=0; j < nomsIngredients.length; j++){
          const nomIngredient = nomsIngredients[j];
          //Si un ingredient n'est pas dans la recette, je passe ingredient ok à false et j'arrete la vérification pour cette recette
          if(!nomsIngRecette.includes(nomIngredient)){
            ingredientsOk = false;
            console.log(`❌ "${nomIngredient}" absent de la recette : ${recette.nom}`);
            

            break;
          }
        }

        //Si il y a tous les ingredients, j'ajoute la recette à ma selection
        if(ingredientsOk){
          selection = [...selection, recette];
          console.log(`✅ Recette ajoutée : ${recette.nom}`);

        }*/
      }
      //Je mets à jour mon state
      console.log("📦 Recettes sélectionnées :", selection);

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
