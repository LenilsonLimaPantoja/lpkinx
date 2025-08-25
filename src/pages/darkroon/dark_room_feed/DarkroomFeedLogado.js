import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import LoadingSpin from '../../../components/LoadingSpin';
import styles from './DarkroomFeedLogado.module.scss';
import EventosPrincipais from './components/EventosPrincipais';
import MenuDarkroomFeed from './components/MenuDarkroomFeed';
import TipoDarkroom from './components/TipoDarkroom';
import PostFeed from '../feed_principal/components/PostFeed';
import { LuUsers } from "react-icons/lu";
import { LuBookmark, LuUserRound } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";

const DarkroomFeedLogado = () => {
    const [loading, setLoading] = useState(true);
    const [menuSelecionado, setMenuSelecionado] = useState(1);

    const handleLoading = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }
    useEffect(() => {
        handleLoading();
    }, []);
    return (
        <>
            {loading && <LoadingSpin />}
            <div className={styles.container_darkroon_feed}>
                <div className={styles.area_darkroon_feed}>
                    <Header logado={true} />
                    <TipoDarkroom />
                    <EventosPrincipais />
                    <MenuDarkroomFeed menuSelecionado={menuSelecionado} setMenuSelecionado={setMenuSelecionado} />
                    <div className={styles.darkroon_feed_body}>
                        <PostFeed />
                        <div className={styles.darkroon_feed_body_right}>
                            <div className={styles.darkroon_feed_body_right_body}>
                                <div className={styles.darkroon_feed_body_right_body_topo}>
                                    <strong>Casual e Amizade</strong>
                                    <p>
                                        Se você e seu par estão buscando expandir o círculo de amizades, trocar ideias ou explorar novas conexões de forma leve e respeitosa, esse espaço é pra vocês! Aqui, casais héteros podem conversar, marcar rolês descontraídos, dividir experiências ou simplesmente se divertir trocando histórias com quem está na mesma vibe. Não é um espaço pra pressão, nem pra julgamentos — é sobre afinidade, cumplicidade e liberdade pra viver o que faz sentido pra cada dupla.
                                    </p>
                                </div>
                                <div className={styles.darkroon_feed_body_right_body_info}>
                                    <div className={styles.darkroon_feed_body_right_body_info_opcao}>
                                        <span>Criado em</span>
                                        <span>4, Março 2025</span>
                                    </div>
                                    <div className={styles.darkroon_feed_body_right_body_info_opcao}>
                                        <span>Darktoom</span>
                                        <span>Pública</span>
                                    </div>
                                </div>
                                <div className={styles.darkroon_feed_body_right_body_dados}>
                                    <div className={styles.darkroon_feed_body_right_body_dados_opcao}>
                                        <LuUsers />
                                        <span>251 Membros</span>
                                    </div>
                                    <div className={styles.darkroon_feed_body_right_body_dados_opcao}>
                                        <div className={styles.darkroon_feed_body_right_body_dados_opcao_online}>
                                            <LuUserRound />
                                            <TbPointFilled className={styles.icone_ponto} />
                                        </div>
                                        <span>121 Online</span>
                                    </div>
                                    <div className={styles.darkroon_feed_body_right_body_dados_opcao}>
                                        <LuBookmark />
                                        <span>12k Posts</span>
                                    </div>
                                </div>
                                <div className={styles.dividir}></div>
                                <div className={styles.area_tags}>
                                    <strong>Tags do Darkroom</strong>
                                    <div className={styles.tags}>
                                        <span>Hétero</span>
                                        <span>Amizade</span>
                                        <span>Festas</span>
                                        <span>Casual</span>
                                        <span>Jovens</span>
                                        <span>Sigilo</span>
                                        <span>Swing</span>
                                        <span>Viagens</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DarkroomFeedLogado;