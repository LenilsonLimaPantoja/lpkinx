import CreateAndPromoteSection from "./components/CreateAndPromoteSection";
import DarkroomCommunitySection from "./components/DarkroomCommunitySection";
import EventsSliderSection from "./components/EventsSliderSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InvisivelGanhaForma from "./components/InvisivelGanhaForma";
import PremiumSection from "./components/PremiumSection";
import WelcomeSection from "./components/WelcomeSection";

const Home = () => {
    return (
        <>
        <Header/>
            <WelcomeSection />
            <PremiumSection />
            <CreateAndPromoteSection />
            <EventsSliderSection />
            <DarkroomCommunitySection />
            <InvisivelGanhaForma />
            <Footer />
        </>
    )
}
export default Home;