// Pour créer, on utilise la fonction react createContext()

import { createContext, useContext, useState } from "react";

const IngredientsContext = createContext()

//Le composant qui est le provider:

export default function IngredientsProvider({children}){
    const [ingredient, setIngredient] = useState("")
    const [listIngredients, setListIngredients] = useState([]);

    function addIngredientToList() {
        //Role: ajouter un ingredient à la liste puis vider l'input

        //1ere étape, vérifier si l'ingredient est déja dans la liste
        //Je normalise le nom
        const ingredientCorrige = ingredient.trim().toLowerCase();

        const ingredientPresent = listIngredients.some((i)=>i.nom.trim().toLowerCase() === ingredientCorrige);

        if(ingredientPresent || ingredientCorrige === ""){
            setIngredient("");
            return;
        }

        //2eme étape, j'ajoute l'ingredient à la liste
        const newIngredient = {
            id: Date.now(), // identifiant unique basé sur le timestamp
            nom: ingredient,
        };

        setListIngredients([newIngredient, ...listIngredients]);
        setIngredient("");
    }

    function handleChange(event) {
        //Role: permet de changer la valeur de l'input
        setIngredient(event.target.value);
    }

    function deleteIngredient(idToDelete) {
        //Role: supprimer un ingredient de la liste
        setListIngredients(listIngredients.filter(ingredient => ingredient.id !== idToDelete));
    }

    return (
        <IngredientsContext.Provider value={{ingredient, listIngredients, addIngredientToList, handleChange, deleteIngredient}}>
            {children}
        </IngredientsContext.Provider>
    )
}

//Je crée le hook personnalisé

export function useIngredients(){
    return useContext(IngredientsContext)
}