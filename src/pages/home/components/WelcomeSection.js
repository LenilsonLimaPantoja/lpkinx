import styles from './WelcomeSection.module.scss';
import { IoIosSearch } from "react-icons/io";
import { RiStore2Line } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

const WelcomeSection = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.hero_left}>
                <div className={styles.hero_titleArea}>
                    <span className={styles.hero_title}>
                        explore, encontre e <span>descubra.</span>
                    </span>
                    <p className={styles.hero_description}>
                        Explore, encontre e descubra um universo de experiências que despertam seus sentidos. 
                        O KiNX é uma plataforma criada para conectar você a eventos que falam diretamente com suas 
                        vontades mais autênticas. Aqui, cada encontro é uma chance de viver algo novo, fora do comum 
                        e alinhado aos seus gostos mais particulares. Do discreto ao ousado, do seleto ao underground, 
                        o KiNX é o espaço onde preferências ganham forma — e você, protagonismo.
                    </p>
                </div>
                <div className={styles.hero_cta}>
                    <button className={styles.hero_ctaButton}>
                        <IoIosSearch />
                    </button>
                </div>
            </div>

            <div className={styles.hero_right}>
                <div className={styles.hero_rightTop}>
                    <div className={styles.hero_highlight}>
                        <div className={styles.hero_highlightArea}>
                            <RiStore2Line className={styles.hero_highlightIcon} />
                            <span className={styles.hero_highlightTitle}>Locais & Estabelecimentos</span>
                            <span className={styles.hero_highlightText}>
                                Veja locais frequentados de acordo com seu perfil
                            </span>
                        </div>
                    </div>

                    <div className={styles.hero_highlight}>
                        <div className={styles.hero_highlightArea}>
                            <FaRegCircleUser className={styles.hero_highlightIcon} />
                            <span className={styles.hero_highlightTitle}>
                                Você é <br /> novo por aqui?
                            </span>
                            <span className={styles.hero_highlightText}>
                                Cadastre-se agora para explorar nossos recursos.
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.hero_search}>
                    <button className={styles.hero_searchButton}>
                        <IoIosSearch />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;
