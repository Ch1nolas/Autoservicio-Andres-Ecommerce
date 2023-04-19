import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Catalog, ItemDetail, PokemonCard } from "../pages/"

export const MainRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/catalog" element={<Catalog />}/>
        <Route exact path="/pokemon" element={<PokemonCard />}/>
      </Routes>
    </Router>
  )
}; 