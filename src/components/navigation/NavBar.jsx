/**
 * Composant pour afficher la bar de navigation
 * Vérifie la page sur laquelle et se trouve et exclu la page Accueil pour s'afficher
 */

import { FiHome } from "react-icons/fi"
import { TfiMenuAlt } from "react-icons/tfi";
import { FiBook } from "react-icons/fi";
import { useLocation, NavLink } from "react-router";

export default function NavBar() {
    const localisation = useLocation()  //Hook pour savoir sur quelle page on se trouve
    const isAccueil = location.pathname === "/";    //Création de la variable pour savoir si on est sur la page d'accueil
    const isRecette = location.pathname.startsWith("/recette/")
    //si on est sur la page d'accueil ou recette, on ne retourne rien
    if(isAccueil || isRecette) return null;

    

    //Sinon, on retourne la navBar
    return (
    <nav>
          <NavLink
            to="/ajouter-ingredients"
            style={({isActive})=>({
              color: isActive ? "#ff5900" : "#ffffff"
            })}
          >
            <FiHome className="icone" />
          </NavLink>
          <NavLink
            to="/recettes"
            style={({isActive})=>({
              color: isActive ? "#ff5900" : "#ffffff"
            })}
          >
            <TfiMenuAlt className="icone" />
          </NavLink>
          <NavLink
            to="/favoris"
            style={({isActive})=>({
              color: isActive ? "#ff5900" : "#ffffff"
            })}
          >
            <FiBook className="icone" />
          </NavLink>
        </nav>
  )
}
