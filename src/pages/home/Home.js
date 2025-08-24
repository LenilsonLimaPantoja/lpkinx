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
import styles from './Home.module.scss';

const Home = () => {
    const [verOcultarPlanos, setVerOcultarPlanos] = useState(false);
    return (
        <>
            <div className={styles.sectionDark}>
                <div className={styles.containerWithPadding}>
                    <Header />
                    <WelcomeSection />
                </div>
            </div>

            <div className={styles.sectionDarker}>
                <div className={styles.container}>
                    {verOcultarPlanos ? (
                        <PremiumSectionPlanos setVerOcultarPlanos={setVerOcultarPlanos} />
                    ) : (
                        <PremiumSection setVerOcultarPlanos={setVerOcultarPlanos} />
                    )}
                </div>
            </div>

            <div className={styles.sectionDark}>
                <div className={styles.container}>
                    <CreateAndPromoteSection />
                </div>
            </div>

            <EventsSliderSection />

            <div className={styles.sectionDarkWithHorizontalPadding}>
                <div className={styles.container}>
                    <DarkroomCommunitySection />
                </div>
            </div>

            <InvisivelGanhaForma />

            <div className={styles.sectionDark}>
                <div className={styles.container}>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;