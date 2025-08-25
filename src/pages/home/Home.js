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
            <div className={styles.section1}>
                <div className={styles.container}>
                    <Header />
                    <WelcomeSection />
                </div>
            </div>

            <div className={styles.section2}>
                <div className={styles.container}>
                    {verOcultarPlanos ? (
                        <PremiumSectionPlanos setVerOcultarPlanos={setVerOcultarPlanos} />
                    ) : (
                        <PremiumSection setVerOcultarPlanos={setVerOcultarPlanos} />
                    )}
                </div>
            </div>

            <div className={styles.section3}>
                <div className={styles.container}>
                    <CreateAndPromoteSection />
                </div>
            </div>

            <EventsSliderSection />

            <div className={styles.section4}>
                <div className={styles.container}>
                    <DarkroomCommunitySection />
                </div>
            </div>

            <InvisivelGanhaForma />

            {/* <div className={styles.section5}> */}
                {/* <div className={styles.container}> */}
                    <Footer />
                {/* </div> */}
            {/* </div> */}
        </>
    );
};

export default Home;