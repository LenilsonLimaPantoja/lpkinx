import styles from './CreateAndPromoteSection.module.scss';
import webcam from '../../../arquivos/webcam.png';
import crie_divulgue from '../../../arquivos/crie_divulgue.jpg';

const CreateAndPromoteSection = () => {
    return (
        <div className={styles.createPromoteSection}>
            <div className={styles.createPromoteLeft}>
                <img className={styles.webcamImage} src={webcam} alt='Imagem webcam' />
                <div className={styles.createPromoteTitle}>
                    <span>Crie e</span>
                    <span>Divulgue seus</span>
                    <span>conteúdos.</span>
                </div>
                <p className={styles.createPromoteDescription}>
                    No KiNX, criadores de conteúdo têm mais do que espaço — têm autonomia. A plataforma foi pensada para você que quer ir além do comum, oferecendo conteúdos únicos, provocativos ou simplesmente autênticos, com a liberdade de monetizar cada experiência. Com ferramentas exclusivas, você pode segmentar seu público, criar acessos personalizados, oferecer conteúdos pagos e direcionar seus seguidores para áreas como os Darkrooms — espaços fechados e altamente controlados, ideais para interações mais intensas e direcionadas.
                </p>
                <button className={styles.learnMoreBtn}>Saiba Mais</button>
            </div>
            <img className={styles.createPromoteImage} src={crie_divulgue} alt='Imagem Crie e Divulgue' />
        </div>
    );
}
export default CreateAndPromoteSection;