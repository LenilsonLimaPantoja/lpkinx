import styles from './App.module.scss';
import Home from './pages/home/Home';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <Home />
      </div>
    </div>
  );
}

export default App;
