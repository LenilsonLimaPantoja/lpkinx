import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import styles from './Ajuda.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
const Ajuda = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Como monetizar com o KINX?",
            answer: (
                <>
                    <p className={styles.pBold}>💰 Como posso monetizar meu conteúdo no KiNX?</p>
                    <p>Você pode monetizar de diversas formas:</p>
                    <ul>
                        <li>Criando um perfil de Criador de Conteúdo.</li>
                        <li>Publicando vídeos autorais e conteúdos exclusivos.</li>
                        <li>Oferecendo assinaturas mensais.</li>
                        <li>Realizando vendas avulsas de conteúdos específicos.</li>
                    </ul>
                    <p className={styles.pBold}>💰 O que são os prêmios digitais pagos?</p>
                    <p>
                        Os prêmios digitais são uma forma dos seus seguidores apoiarem o seu
                        trabalho, enviando gorjetas ou comprando presentes virtuais.
                    </p>
                    <p className={styles.pBold}>🔒 Como funciona a integração com as Darkrooms?</p>
                    <p>
                        Como Criador de Conteúdo, você pode criar fóruns privados ou públicos dentro das Darkrooms, segmentando seu público conforme preferências, fetiches ou temas. Também pode vincular conteúdos e eventos diretamente a essas comunidades.
                    </p>
                    <p className={styles.pBold}>📍 Posso criar eventos pagos?</p>
                    <p>Sim! Você pode:</p>
                    <ul>
                        <li>Organizar eventos exclusivos para seus assinantes ou seguidores.</li>
                        <li>Definir a participação como gratuita ou paga, conforme seu interesse.</li>
                        <li>Marcar pontos de interesse no mapa, indicando onde o evento ocorrerá ou destacando locais temáticos relacionados à sua comunidade.</li>
                    </ul>
                    <p className={styles.pBold}> 🏆 Como funcionam os planos de assinatura?</p>
                    <p>Você define o valor e os benefícios:</p>
                    <ul>
                        <li>Acesso antecipado a conteúdos.</li>
                        <li>Participação em fóruns privados.</li>
                        <li>Descontos em eventos ou kits promocionais.</li>
                        <li>Material exclusivo que não será divulgado publicamente.</li>
                    </ul>
                    <p className={styles.pBold}>🏪 Estabelecimentos também podem monetizar?</p>
                    <p>Sim! Estabelecimentos podem:</p>
                    <ul>
                        <li>Publicar eventos pagos.</li>
                        <li>Criar planos VIP com benefícios exclusivos para clientes.</li>
                        <li>Integrar sua presença nas Darkrooms, atraindo públicos segmentados.</li>
                    </ul>
                    <p className={styles.pBold}>⚠️ Preciso validar minha identidade para monetizar?</p>
                    <p>Sim, a validação de identidade é obrigatória para garantir a segurança e a autenticidade na plataforma. Isso protege você e seus seguidores.</p>
                    <p className={styles.pBold}>🤝 Como recebo os pagamentos?</p>
                    <p>
                        Os pagamentos são processados através das ferramentas integradas do KiNX, com total segurança. Você pode acompanhar seu saldo e solicitar retiradas conforme os prazos estabelecidos pela plataforma.
                    </p>
                </>
            ),
        },
        {
            question: "O que fazer caso suspeite que alguém acessou minha conta?",
            answer: (
                <>
                    <p className={styles.pBold}>⚠️ Suspeita de acesso não autorizado</p>
                    <p>
                        Se você acha que alguém acessou sua conta sem autorização, siga os passos abaixo:
                    </p>
                    <ul>
                        <li>Altere sua senha imediatamente.</li>
                        <li>Habilite a autenticação de dois fatores (2FA).</li>
                        <li>Revise dispositivos conectados e sessões ativas.</li>
                        <li>Entre em contato com o suporte através do formulário ou email oficial.</li>
                    </ul>
                </>
            ),
        },
        {
            question: "O KINX é sigiloso? As pessoas veem minhas informações?",
            answer: (
                <>
                    <p className={styles.pBold}>🔒 Privacidade e sigilo</p>
                    <p>
                        No KiNX, suas informações pessoais e conteúdos privados são protegidos. Somente o que você compartilha publicamente estará visível para outros usuários.
                    </p>
                    <ul>
                        <li>Perfis privados mantêm conteúdos restritos a assinantes ou grupos específicos.</li>
                        <li>Dados financeiros e pagamentos são confidenciais e não são compartilhados.</li>
                        <li>Você controla quem pode interagir com seus conteúdos.</li>
                    </ul>
                </>
            ),
        },
        {
            question: "Como recuperar a minha senha?",
            answer: (
                <>
                    <p className={styles.pBold}>🔑 Redefinição de senha</p>
                    <p>
                        Caso tenha esquecido sua senha, siga o procedimento de recuperação:
                    </p>
                    <ul>
                        <li>Clique em "Esqueci minha senha" na tela de login.</li>
                        <li>Informe seu email cadastrado no KiNX.</li>
                        <li>Receba o link de redefinição e crie uma nova senha segura.</li>
                        <li>Se não receber o email, verifique sua caixa de spam ou entre em contato com o suporte.</li>
                    </ul>
                </>
            ),
        },
        {
            question: "Como funciona o Mecanismo de indicação KINX?",
            answer: (
                <>
                    <p className={styles.pBold}>📢 Indicações e recompensas</p>
                    <p>
                        O sistema de indicações do KiNX permite que você convide novos usuários e receba benefícios:
                    </p>
                    <ul>
                        <li>Compartilhe seu código de indicação único.</li>
                        <li>Cada novo usuário cadastrado com seu código gera pontos ou recompensas.</li>
                        <li>Alguns planos de monetização oferecem bônus financeiros por indicações bem-sucedidas.</li>
                        <li>Você pode acompanhar o histórico de indicações na sua conta.</li>
                    </ul>
                </>
            ),
        },
        {
            question: "Como realizar a validação de idade no portal?",
            answer: (
                <>
                    <p className={styles.pBold}>🔞 Validação de idade</p>
                    <p>
                        Para acessar determinados conteúdos e funcionalidades, o KiNX exige validação de idade:
                    </p>
                    <ul>
                        <li>Envie um documento oficial com foto (RG, CNH ou passaporte).</li>
                        <li>Confirme sua data de nascimento no portal.</li>
                        <li>O sistema verifica automaticamente a autenticidade do documento.</li>
                        <li>Após validação, você terá acesso total às funcionalidades de acordo com sua faixa etária.</li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <div className={styles.faqPage}>
            <div className={styles.faqHeader}>
                <Header />
                <div className={styles.faqHeaderContent}>
                    <h1 className={styles.faqHeaderTitle}>Como podemos Ajudar?</h1>
                    <p className={styles.faqHeaderDescription}>Tem dúvidas sobre como usar a plataforma, monetizar conteúdos ou participar das comunidades? Acesse nosso FAQ para encontrar respostas rápidas sobre funcionalidades, segurança, pagamentos e muito mais. Se não encontrar o que procura, nosso time de suporte está sempre disponível para ajudar, garantindo que sua experiência no KiNX seja completa, segura e personalizada.</p>
                </div>
            </div>
            {/* Barra de busca */}
            <div className={styles.faqSearchBar}>
                <label className={styles.searchCategory}>
                    <select>
                        <option>Financeiro</option>
                        <option>Login</option>
                        <option>Postagem</option>
                    </select>
                </label>
                <div className={styles.searchInputWrapper}>
                    <IoIosSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Procurar Ajuda"
                    />
                    <button className={styles.searchButton}>Buscar</button>
                </div>
            </div>

            <div className={styles.faqContentWrapper}>
                {/* Menu lateral */}
                <aside className={styles.faqSidebar}>
                    <ul className={styles.sidebarList}>
                        <li className={styles.sidebarItem}>Quem Somos?</li>
                        <li className={styles.sidebarItem}>Como Funciona o KINX?</li>
                        <li className={styles.sidebarItem}>Financeiro</li>
                        <li className={styles.sidebarItem}>Nossas Funcionalidades</li>
                        <li className={styles.sidebarItem}>Minha Conta</li>
                        <li className={styles.sidebarItem}>Fale Conosco</li>
                        <li className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}>
                            Perguntas Frequentes
                        </li>
                    </ul>
                </aside>

                {/* Conteúdo principal */}
                <main className={styles.faqMainContent}>
                    <h1 className={styles.faqTitle}>Perguntas Frequentes</h1>

                    <div className={styles.faqList}>
                        {faqs.map((item, index) => (
                            <div key={index} className={styles.faqItem}>
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <span className={openIndex === index ? styles.spanAtivado : ''}
                                    >{item.question}</span>
                                    {openIndex === index ? <TfiArrowCircleUp color="#CBFB45" /> : <TfiArrowCircleDown />}
                                </button>
                                {openIndex === index && (
                                    <div className={styles.faqAnswer}>{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Ajuda;