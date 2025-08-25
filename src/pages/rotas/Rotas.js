import { Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import Ajuda from "../ajuda/Ajuda";
import DarkroomFeed from "../darkroon/DarkroomFeed";
import DarkroomFeedPrincipal from "../darkroon/feed_principal/DarkroomFeedPrincipal";
import DarkroomFeedLogado from "../darkroon/dark_room_feed/DarkroomFeedLogado";

const Rotas = () => {
    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/darkroom" element={<DarkroomFeed />} />
            <Route path="/darkroom/feed" element={<DarkroomFeedPrincipal />} />
            <Route path="/darkroom/feed/logado" element={<DarkroomFeedLogado />} />
        </Routes>
    )
}
export default Rotas;