import { BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/paginaPadrao";
import Post from "paginas/Post";

//console.log(window.location);

//const pagina = window.location.pathname==='/'? <Inicio/>:<SobreMim/>

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      
      <Routes>
      <Route path="/" element={<PaginaPadrao/>}>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="posts/:id" element={<Post/>}/>
      </Route>
        
        <Route path="*" element={<div>pagina não encontrada</div>}/>
      </Routes>

    <Rodape/>
    </BrowserRouter>
    
  )
}

export default AppRoutes;
