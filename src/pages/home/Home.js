import { useState } from "react";
import CreateAndPromoteSection from "./components/CreateAndPromoteSection";
import DarkroomCommunitySection from "./components/DarkroomCommunitySection";
import EventsSliderSection from "./components/EventsSliderSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InvisivelGanhaForma from "./components/InvisivelGanhaForma";
import PremiumSection from "./components/PremiumSection";
import PremiumSectionPlanos from "./components/PremiumSectionPlanos";
import WelcomeSection from "./components/WelcomeSection";

const Home = () => {
    const [verOcultarPlanos, setVerOcultarPlanos] = useState(false);
    return (
        <>
            <div style={{ width: '100%', padding: '36px 95px 0px 95px', background: '#232323' }}>
                <Header />
                <WelcomeSection />
            </div>
            {verOcultarPlanos ?
                <PremiumSectionPlanos style={{}} setVerOcultarPlanos={setVerOcultarPlanos} />
                :
                <PremiumSection setVerOcultarPlanos={setVerOcultarPlanos} />
            }
            <CreateAndPromoteSection />
            <EventsSliderSection />
            <div style={{ width: '100%', padding: '0px 95px' }}>
                <DarkroomCommunitySection />
            </div>
            <InvisivelGanhaForma />
            <Footer />
        </>
    )
}
export default Home;