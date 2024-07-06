import { BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./paginas/Inicio"
import SobreMim from "./paginas/SobreMim"

//console.log(window.location);

//const pagina = window.location.pathname==='/'? <Inicio/>:<SobreMim/>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>pagina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
