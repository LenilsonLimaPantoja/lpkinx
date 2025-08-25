import styles from './TelaCodigo.module.scss'
import { useState } from 'react';
import { SiGoogle } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Input from './Input';
import ButtonComponent from './ButtonComponent';

const TelaCodigo = ({ setEtapa }) => {
    return (
        <div className={styles.area_1}>
            <div className={styles.titulo_text}>
                <span>Enviamos um código para você</span>
                <p>Confira seu e-mail para pegar o código de confirmação. Se você precisar solicitar um novo código, volte e selecione novamente uma confirmação.</p>
            </div>
            <div className={styles.area_form}>
                <form>
                    <Input name='usuario' placeholder='Digite seu Código de 6 DIgitos' type='text' />
                    <ButtonComponent text="Continuar" onClick={() => setEtapa(5)} type='button' />
                    <ButtonComponent bgColor="transparent" color="#707070" border={true} text="Cancelar" onClick={() => setEtapa(1)} type='button' />
                </form>
            </div>
            <span className={styles.info} onClick={() => alert("Suporte do Kinx")}>
                Entre em contato com o <strong>Suporte do Kinx</strong> caso você não tenha acesso.
            </span>
        </div>
    )
}

export default TelaCodigo;