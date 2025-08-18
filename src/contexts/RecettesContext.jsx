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
    const nbFavori = favoriRecettes.length

    const{listIngredients} = useIngredients()

    //Je récupère la liste de toutes les recettes
    useEffect(()=>{
        fetch('../recettes_cuisine.json')
            .then(response => response.json())
            .then(data => setRecettesAll(data));
    },[])

    //Je récupère la liste des favoris dans le localstorage
    useEffect(()=>{
        const favorisLocal = localStorage.getItem('favoris');
        if(favorisLocal){
          const parsed = JSON.parse(favorisLocal);
          setFavoriRecettes(parsed);
        }
      }, [])

    function filtrerRecettes(){

      // Vérifie si les recettes sont bien chargées
      if (!recettesAll || recettesAll.length === 0) {
        return;
      }

      // Vérifie les ingrédients sélectionnés
      console.log(" Ingrédients sélectionnés :", listIngredients);


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
      const normaliser = (str) => str.trim().toLowerCase()
      const nomsIngredients = listIngredients.map((i)=> normaliser(i.nom))

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
      setSelectionRecettes(selection)
    }

    function isFavori(idRecette){
      //Role: vérifier si l'id de la recette est dans la liste des favoris
      //Retour: true si dans la liste, sinon false
      return favoriRecettes.includes(idRecette)
    }

    function addFavoris(idToAdd){
      //Role: ajouter un favori à la liste de favori et mettre à jour le localStorage
      //Retour: néant
      const upDateFavori = [...favoriRecettes, idToAdd]
      setFavoriRecettes(upDateFavori)
      localStorage.setItem("favoris", JSON.stringify(upDateFavori))
    }

    function removeFavoris(idToDelete){
      //Role: supprimer un favori à la liste de favori et mettre à jour le localStorage
      //Retour: néant
      const upDateFavori = favoriRecettes.filter(id => id !== idToDelete)
      setFavoriRecettes(upDateFavori);
      localStorage.setItem("favoris", JSON.stringify(upDateFavori))
    }
      
  return (
    <RecettesContext.Provider value={{recettesAll, selectionRecettes, favoriRecettes, filtrerRecettes, removeFavoris, addFavoris, isFavori, nbFavori}}>
        {children}
    </RecettesContext.Provider>
  )
}

//Je crée le hook personnalisé
export function useRecettes(){
    return useContext(RecettesContext)
}
