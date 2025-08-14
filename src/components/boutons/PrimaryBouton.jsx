// Composant pour la creation d'un bouton avec le texte modulatble

import React from 'react'

export default function PrimaryBouton({texte}) {
  return (
    <button className='primary-btn'>
        {texte}
    </button>
  )
}
