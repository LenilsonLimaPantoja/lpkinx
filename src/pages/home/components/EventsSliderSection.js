import styles from './EventsSliderSection.module.scss';
import img1 from '../../../arquivos/carrossel/1.png';
import img2 from '../../../arquivos/carrossel/2.gif';
import img3 from '../../../arquivos/carrossel/3.png';
import img4 from '../../../arquivos/carrossel/4.png';
import img5 from '../../../arquivos/carrossel/5.png';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import React from 'react';

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
];

const dados = [
    "Controle de Eventos",
    "Emissão de Tickets",
    "Definição de Perfis",
    "Sigilo e Discrição",
    "Pagamentos Antecipados"
];

const EventsSliderSection = () => {
    const carouselImages = [...images, ...images]; // duplicadas para loop suave
    const details = [...dados, ...dados, ...dados]; // duplicadas 2 vezes para loop suave

    return (
        <div className={styles.eventsSection}>
            <span className={styles.sectionLabel}>eventos</span>

            <div className={styles.eventsContent}>
                <div className={styles.eventsTextos}>
                    <div className={styles.eventsTitle}>
                        <span>Gerencie e </span>
                        <span>Personalize</span>
                        <span>seus eventos.</span>
                    </div>

                    <p className={styles.eventsDescription}>
                        No KiNX, você tem o controle total do seu evento de um jeito simples e direto. Dá pra escolher quem participa, criar categorias de acesso, organizar os lotes, incluir perguntas personalizadas e até liberar conteúdos diferentes conforme o perfil de cada pessoa. Tudo isso num painel fácil de usar, feito pra quem quer montar algo autêntico, do rolê mais reservado à festa mais insana. E o melhor: com segurança, privacidade e liberdade pra fazer do seu jeito.
                    </p>

                    <span className={styles.featuredEventsLabel}>Eventos em Destaque:</span>
                </div>

                <div className={styles.eventsCarouselWrapper}>
                    <div className={styles.eventsCarouselTrack}>
                        {carouselImages?.map((src, index) => (
                            <div key={index} className={styles.eventsCarouselItem}>
                                <img src={src} alt={`Slide ${index + 1}`} />
                                <div className={styles.eventInfoOverlay}>
                                    <span>26 Set 25</span>
                                    <span>90's Party America</span>
                                    <p>Festa prive só para casais jovens e selecionados...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.eventsDetailsCarouselWrapper}>
                    <div className={styles.eventsDetailsCarouselTrack}>
                        {details.map((dado, index) => (
                            <div key={index} className={styles.eventsDetailsItem}>
                                <VscDebugBreakpointLog />
                                <span>{dado}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsSliderSection;