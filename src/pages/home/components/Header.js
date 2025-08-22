import styles from './Header.module.scss';
import logo_green from '../../../arquivos/logo_green.png';
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo_green} alt='Logo Kinx' className={styles.header_logo} />

            <ul className={styles.header_nav}>
                <li className={styles.header_navItem}>Home</li>
                <li className={styles.header_navItem}>Criadores</li>
                <li className={styles.header_navItem}>Darkrooms</li>
                <li className={styles.header_navItem}>Eventos</li>
                <li className={styles.header_navItem}>Suporte</li>
            </ul>

            <div className={styles.header_actions}>
                <button className={styles.header_btnRegister}>Registre-se Agora!</button>
                <button className={styles.header_btnLogin}>Entrar</button>
                <button className={styles.header_btnMenu}>
                    <CgMenuRight />
                </button>
            </div>
        </div>
    )
}
export default Header;