import styles from './PremiumSection.module.scss';
import kinx_premium_access from '../../../arquivos/kinx_premium_acess.png';
import { TfiArrowCircleDown } from "react-icons/tfi";

function PremiumSection({ setVerOcultarPlanos }) {
  return (
    <div className={styles.premiumSection}>
      <TfiArrowCircleDown
        onClick={() => setVerOcultarPlanos(true)}
        className={styles.togglePremiumInfo}
      />
      <div className={styles.premiumContent}>
        <div className={styles.premiumLeft}>
          <img src={kinx_premium_access} alt="Logo Premium" className={styles.premiumLogo} />
          <button
            onClick={() => setVerOcultarPlanos(true)}
            className={styles.viewPlansBtn}
          >
            Ver Planos
          </button>
        </div>
        <p className={styles.premiumDescription}>
          Ser assinante premium do KiNX é ter acesso a uma experiência sem limites. Com a assinatura, você desbloqueia eventos exclusivos, conteúdos diferenciados, filtros avançados por preferências e perfis, além de vantagens únicas como ingressos antecipados, acessos prioritários e interações privadas com criadores e estabelecimentos. É mais liberdade, mais possibilidades e muito mais controle sobre o que você quer viver — tudo com discrição, segurança e total sintonia com os seus desejos.
        </p>
      </div>
    </div>
  );
}

export default PremiumSection;
