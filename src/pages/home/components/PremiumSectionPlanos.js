import styles from './PremiumSectionPlanos.module.scss';
import kinx_premium_acess from '../../../arquivos/kinx_premium_acess.png';
import { FaCheckCircle } from "react-icons/fa";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { LuCrown } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';

const PremiumSectionPlanos = ({ setVerOcultarPlanos }) => {
    const [selectPessoalProfissional, setSelectPessoalProfissional] = useState(1);
    const [selectMensalAnual, setSelectMensalAnual] = useState(false);
    const [selectPlano, setSelectPlano] = useState(2);

    return (
        <div className={styles.premiumContainer}>
            <div className={styles.premiumContent}>
                <IoIosCloseCircleOutline
                    className={styles.closeIcon} onClick={() => setVerOcultarPlanos(false)} />

                <div className={styles.premiumHeader}>
                    <img src={kinx_premium_acess} alt="Logo Premium" className={styles.premiumLogo} />
                    <span className={styles.premiumTitle}>Premium Acess</span>
                    <span className={styles.premiumSubtitle}>Escolha um plano ampliar sua experiência</span>
                    <p className={styles.premiumDescription}>
                        Para ampliar sua experiência em nosso portal selecione um plano com recursos exclusivos, podendo direcioná-lo para uso pessoal ou profissional.
                    </p>
                </div>

                <div className={styles.planTypeSelector}>
                    <button
                        onClick={() => setSelectPessoalProfissional(1)}
                        className={`${styles.planTypeBtn} ${selectPessoalProfissional === 1 ? styles.planTypeBtnActive : ''}`}
                    >Pessoal</button>
                    <button
                        onClick={() => setSelectPessoalProfissional(2)}
                        className={`${styles.planTypeBtn} ${selectPessoalProfissional === 2 ? styles.planTypeBtnActive : ''}`}
                    >Profissional</button>
                </div>

                <div className={styles.billingSelector}>
                    <span className={`${selectMensalAnual ? styles.spanMonthlyActive : ''}`}>Mensal</span>
                    <button
                        onClick={() => setSelectMensalAnual(!selectMensalAnual)}
                        className={`${selectMensalAnual ? styles.billingMonthlyActive : styles.billingAnnualActive}`}
                    >
                        <RiCheckboxBlankCircleFill />
                    </button>
                    <span className={`${!selectMensalAnual ? styles.spanAnnualActive : ''}`}>Anual</span>
                </div>

                <div className={styles.plansWrapper}>
                    <div
                        className={`${styles.planCard} ${selectPlano === 1 ? styles.planCardActive : ''}`}
                        onClick={() => setSelectPlano(1)}
                    >
                        <div className={styles.planCardHeader}>
                            <div className={styles.planCardHeaderLeft}>
                                <span>Plano</span>
                                <span>Gartuito</span>
                            </div>
                            <TbTargetArrow />
                        </div>
                        <span className={styles.planPrice}>Free</span>
                        <p className={styles.planDescription}>
                            Plano gratuito para acessar recursos do kinx com discrição e cuidado.
                        </p>
                        <div className={styles.planFeatures}>
                            <span>Principais Recursos:</span>
                            <ul>
                                <li><FaCheckCircle /><span>Acesso a Darkrooms</span></li>
                                <li><FaCheckCircle /><span>Mapeamentos de Perfil</span></li>
                                <li><FaCheckCircle /><span>Pontos de Interesses</span></li>
                                <li><FaCheckCircle /><span>Conteúdos Públicos de Criadores (Limitado)</span></li>
                            </ul>
                        </div>
                        <div className={styles.planActionBtn}>
                            <button><MdOutlineKeyboardArrowRight /></button>
                        </div>
                    </div>

                    <div
                        className={`${styles.planCard} ${selectPlano === 2 ? styles.planCardActive : ''}`}
                        onClick={() => setSelectPlano(2)}
                    >
                        <div className={styles.planCardHeader}>
                            <div className={styles.planCardHeaderLeft}>
                                <span>Plano</span>
                                <span>Starter</span>
                            </div>
                            <TbTargetArrow />
                        </div>
                        <span className={styles.planPrice}>$9,90<span>/mês</span></span>
                        <p className={styles.planDescription}>
                            Plano gratuito para acessar recursos do kinx com discrição e cuidado.
                        </p>
                        <div className={styles.planFeatures}>
                            <span>Principais Recursos:</span>
                            <ul>
                                <li><FaCheckCircle /><span>Todos os recursos do Free</span></li>
                                <li><FaCheckCircle /><span>Criação de Álbuns</span></li>
                                <li><FaCheckCircle /><span>Acesso VIP de Darkrooms</span></li>
                                <li><FaCheckCircle /><span>Chat ilimitado com todos usuários.</span></li>
                                <li><FaCheckCircle /><span>Edição Completa de Perfil</span></li>
                                <li><FaCheckCircle /><span>Acesso ilimitado a conteúdos Públicos</span></li>
                            </ul>
                        </div>
                        <div className={styles.planActionBtn}>
                            <button><MdOutlineKeyboardArrowRight /></button>
                        </div>
                    </div>

                    <div
                        className={`${styles.planCard} ${selectPlano === 3 ? styles.planCardActive : ''}`}
                        onClick={() => setSelectPlano(3)}
                    >
                        <div className={styles.planCardHeader}>
                            <div className={styles.planCardHeaderLeft}>
                                <span>Plano</span>
                                <span>Ultimate</span>
                            </div>
                            <LuCrown />
                        </div>
                        <span className={styles.planPrice}>$19,90<span>/mês</span></span>
                        <p className={styles.planDescription}>
                            Plano gratuito para acessar recursos do kinx com discrição e cuidado.
                        </p>
                        <div className={styles.planFeatures}>
                            <span>Principais Recursos:</span>
                            <ul>
                                <li><FaCheckCircle /><span>Todos os Recursos do Free</span></li>
                                <li><FaCheckCircle /><span>Todos os Recursos do Starter</span></li>
                                <li><FaCheckCircle /><span>Criação de Darkrooms</span></li>
                                <li><FaCheckCircle /><span>Criação de Eventos</span></li>
                                <li><FaCheckCircle /><span>Busca Avançadas de Usuários</span></li>
                                <li><FaCheckCircle /><span>Promoções VIP</span></li>
                            </ul>
                        </div>
                        <div className={styles.planActionBtn}>
                            <button><MdOutlineKeyboardArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PremiumSectionPlanos;
