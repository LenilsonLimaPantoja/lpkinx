import styles from './DarkroomCommunitySection.module.scss';
import { LuUserRoundPen } from "react-icons/lu";
import { TbMapPin2 } from "react-icons/tb";
import { IoTicketOutline } from "react-icons/io5";
import { GiChaingun } from "react-icons/gi";

const DarkroomCommunitySection = () => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionLeft}>
                <span className={styles.sectionSubtitle}>Darkrooom Community</span>
                <span className={styles.sectionTitle}>
                    O <span>invisível</span> ganha forma.
                </span>
                <button className={styles.sectionButton}>Acessar</button>
            </div>

            <div className={styles.sectionRight}>
                <p className={styles.sectionDescription}>
                    Darkroom Community é o espaço mais reservado do KiNX — uma comunidade fechada onde os limites são definidos por você. Criada para quem valoriza discrição, afinidade e liberdade de expressão, essa área reúne eventos, conteúdos e conexões voltadas a perfis mais ousados e desejos mais específicos. Com acesso controlado, curadoria de experiências e interações segmentadas por preferências, o Darkroom é onde o não dito ganha forma, e o respeito pela individualidade é a única regra.
                </p>

                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardIconWrapper}>
                            <button><LuUserRoundPen /></button>
                        </div>
                        <div className={styles.cardText}>
                            <span className={styles.cardTitle}>Perfis Configuráveis</span>
                            <p className={styles.cardDescription}>
                                Os perfis nas comunidades Darkroom são pensados para garantir discrição, autenticidade e conexão real. Cada usuário pode personalizar suas preferências, definir níveis de visibilidade e acessar conteúdos e experiências compatíveis com seus interesses mais específicos. Aqui, o respeito às individualidades é prioridade.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIconWrapper}>
                            <button><TbMapPin2 /></button>
                        </div>
                        <div className={styles.cardText}>
                            <span className={styles.cardTitle}>Pontos e Locais de Interesse</span>
                            <p className={styles.cardDescription}>
                                No KiNX, usuários podem marcar e explorar pontos de interesse no mapa, criando uma rede discreta e conectada de locais alinhados aos seus desejos. Seja um espaço reservado, um evento especial ou uma darkroom em funcionamento, você escolhe o que compartilhar, com quem e como. Tudo com privacidade, filtros por perfil e a liberdade de viver experiências reais, do jeito que faz sentido pra você.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIconWrapper}>
                            <button><IoTicketOutline /></button>
                        </div>
                        <div className={styles.cardText}>
                            <span className={styles.cardTitle}>Eventos Exclusivos</span>
                            <p className={styles.cardDescription}>
                                No KiNX, você tem a liberdade de criar eventos únicos — sejam públicos, restritos ou totalmente privados, voltados às comunidades Darkroom. Você escolhe quem entra, como participa e o que vivencia. Tudo com segurança, discrição e ferramentas que respeitam seus limites e intenções. É mais do que um evento — é um ambiente pensado para conexões verdadeiras, intensas e fora do óbvio.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIconWrapper}>
                            <button><GiChaingun /></button>
                        </div>
                        <div className={styles.cardText}>
                            <span className={styles.cardTitle}>Integração de Público</span>
                            <p className={styles.cardDescription}>
                                No KiNX, as comunidades Darkroom se conectam com todo o ecossistema da plataforma. Você pode integrar seu público a criadores de conteúdo que compartilham dos mesmos interesses, descobrir espaços e estabelecimentos alinhados à proposta da comunidade e criar experiências ainda mais completas. Tudo flui de forma segura, segmentada e feita sob medida.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DarkroomCommunitySection;
