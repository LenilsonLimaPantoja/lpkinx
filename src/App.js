import PremiumSection from './pages/home/components/PremiumSection';
import CreateAndPromoteSection from './pages/home/components/CreateAndPromoteSection';
import Footer from './pages/home/components/Footer';
import styles from './App.module.scss';
import InvisivelGanhaForma from './pages/home/components/InvisivelGanhaForma';
import DarkroomCommunitySection from './pages/home/components/DarkroomCommunitySection';
import EventsSliderSection from './pages/home/components/EventsSliderSection';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <PremiumSection />
        <CreateAndPromoteSection />
        <EventsSliderSection/>
        <DarkroomCommunitySection />
        <InvisivelGanhaForma />
        <Footer />
      </div>
    </div>
  );
}

export default App;
