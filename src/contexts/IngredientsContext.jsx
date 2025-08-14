// Pour créer, on utilise la fonction react createContext()

import { createContext, useContext, useState } from "react";

const IngredientsContext = createContext()

//Le composant qui est le provider:

export default function IngredientsProvider({children}){
    const [ingredient, setIngredient] = useState("")
    const [listIngredients, setListIngredients] = useState([]);

    function addIngredientToList() {

        const newIngredient = {
            id: Date.now(), // identifiant unique basé sur le timestamp
            nom: ingredient,
        };

        setListIngredients([newIngredient, ...listIngredients]);
        setIngredient("");
    }

    function handleChange(event) {
        setIngredient(event.target.value);
    }

    function deleteIngredient(idToDelete) {
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