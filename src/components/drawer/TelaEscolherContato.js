import styles from './TelaEscolherContato.module.scss'
import ButtonComponent from './ButtonComponent';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';
import { useState } from 'react';

const TelaEscolherContato = ({ setEtapa }) => {
    const [selectOpcao, setSelectOpcao] = useState(false);
    const handleSelectOpcao = () => {
        setSelectOpcao(prevent => !prevent);
    }
    return (
        <div className={styles.area_1}>
            <div className={styles.titulo_text}>
                <span>Qual o meio de contato para envio de Código de Recuperação?</span>
                <p>Precisamos validar sua identidade antes de realização a recuperação, selecione a opção para envio do código:</p>
            </div>
            <div className={styles.area_form}>
                <form>
                    <div className={styles.opcao_contato}>
                        <span className={styles.texto_opcao}>
                            Enviar para E-mail <strong>james*****x@gmail.com</strong>
                        </span>
                        {selectOpcao ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine onClick={handleSelectOpcao} />}
                    </div>
                    <div className={styles.opcao_contato}>
                        <span className={styles.texto_opcao}>
                            Enviar para o celular <strong>+55 67 9*****20</strong>
                        </span>
                        {selectOpcao ? <RiCheckboxBlankCircleLine onClick={handleSelectOpcao} /> : <RiCheckboxCircleFill />}
                    </div>
                    <ButtonComponent text="Continuar" onClick={() => setEtapa(4)} type='button' />
                    <ButtonComponent bgColor="transparent" color="#707070" border={true} text="Cancelar" onClick={() => setEtapa(1)} type='button' />
                </form>
            </div>
            <span className={styles.info} onClick={() => alert('Suporte do Kinx')}>
                Entre em contato com o <strong>Suporte do Kinx</strong> caso você não tenha acesso.
            </span>
        </div>
    )
}

export default TelaEscolherContato;