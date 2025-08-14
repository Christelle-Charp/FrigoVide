//Composant pour gérer tous les boutons

import { NavLink } from "react-router";

export default function BoutonLink({texte, lien}){
    return(
        
            <NavLink 
            to={lien}
            className="primary-btn">
                {texte}
            </NavLink>
        
    )
}