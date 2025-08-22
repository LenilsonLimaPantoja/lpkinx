import { Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import Ajuda from "../ajuda/Ajuda";

const Rotas = () => {
    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/ajuda" element={<Ajuda />} />
        </Routes>
    )
}
export default Rotas;