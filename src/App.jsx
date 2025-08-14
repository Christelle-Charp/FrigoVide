import { BrowserRouter, NavLink, Route, Routes } from "react-router"
import Accueil from "./pages/Accueil"
import AjouterIngredients from "./pages/AjouterIngredients"
import Recettes from "./pages/Recettes"
import RecetteDetail from "./pages/RecetteDetail"
import Favoris from "./pages/Favoris"
import NavBar from "./components/navigation/NavBar"




function App() {
  

  return (
    <><div className="ecran-portable">
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/ajouter-ingredients" element={<AjouterIngredients/>}/>
          <Route path="/recettes" element={<Recettes/>}/>
          <Route path="/recette/:id" element={<RecetteDetail/>}/>
          <Route path="/favoris" element={<Favoris/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
