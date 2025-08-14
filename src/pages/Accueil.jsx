/**
 * Page d'accueil permettant d'entrant sur le site
 */

import BoutonLink from "../components/boutons/BoutonLink";

export default function Accueil(){

    return(
        <div className="contenair accueil ">
            <div className="flex-column-centre">
                <h1>Frigo Vide</h1>
                <img src="./public/images/accueil/frigo.png" alt="Dessin d'un frigo ouvert avec un personnage pret à vous aider à cuisiner" />
                <p>L’application qui vous aide à <span>mieux manger</span> en utilisant vos <span>restes</span> et en <span>économisant</span> un maximum !</p>
                <BoutonLink lien={"/ajouter-ingredients"} texte={"Qu'est ce qu'il y a dans ton frigo?"}/>
            </div>
        </div>
        
    )
}

