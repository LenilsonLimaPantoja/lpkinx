import styles from './Header.module.scss';
import logo_green from '../arquivos/logo_green.png';
import { CgMenuRight } from "react-icons/cg";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DrawerFormulario from './drawer/DrawerFormulario';

const Header = () => {
    const navigation = useNavigate();
    const location = useLocation(); // <- pega a rota atual
    const [openCloseMenu, setOpenCloseMenu] = useState(false);
    return (
        <>
            <div className={styles.header}>
                <img src={logo_green} alt='Logo Kinx' className={styles.header_logo} />

                <ul className={styles.header_nav}>
                    <li onClick={() => navigation('/')} className={`${styles.header_navItem} ${location.pathname === '/' ? styles.active : ''}`}>Home</li>
                    <li onClick={() => navigation('/2')} className={`${styles.header_navItem} ${location.pathname === '/2' ? styles.active : ''}`}>Criadores</li>
                    <li onClick={() => navigation('/3')} className={`${styles.header_navItem} ${location.pathname === '/3' ? styles.active : ''}`}>Darkrooms</li>
                    <li onClick={() => navigation('/4')} className={`${styles.header_navItem} ${location.pathname === '/4' ? styles.active : ''}`}>Eventos</li>
                    <li
                        onClick={() => navigation('/ajuda')}
                        className={`${styles.header_navItem} ${location.pathname === '/ajuda' ? styles.active : ''}`}
                    >Suporte</li>
                </ul>

                <div className={styles.header_actions}>
                    <button className={styles.header_btnRegister}>Registre-se Agora!</button>
                    <button className={styles.header_btnLogin} onClick={() => setOpenCloseMenu(true)}>Entrar</button>
                    <button className={styles.header_btnMenu}>
                        <CgMenuRight />
                    </button>
                </div>
            </div>
            <DrawerFormulario isOpenClose={openCloseMenu} setIsOpenClose={setOpenCloseMenu} />
        </>
    )
}
export default Header;