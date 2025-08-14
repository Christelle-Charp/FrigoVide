// Composant pour la creation d'un bouton avec le texte modulatble

import React from 'react'

//il faut impérativement utiliser ...props pour que la fonction onClick s'applique sur le bouton
export default function PrimaryBouton({children, ...props}) {
  return (
    <button {...props}className='primary-btn'>
        {children}
    </button>
  )
}
