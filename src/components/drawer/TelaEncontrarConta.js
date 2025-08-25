import styles from './TelaEncontrarConta.module.scss'
import { useState } from 'react';
import { SiGoogle } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Input from './Input';
import ButtonComponent from './ButtonComponent';

const TelaEncontrarConta = ({ setEtapa }) => {
    return (
        <div className={styles.area_1}>
            <div className={styles.titulo_text}>
                <span>Encontrar sua Conta</span>
                <p>Informe se e-mail, número de telefone, CPF ou CNPJ ou nome de usuário que está associado a sua conta.</p>
            </div>
            <div className={styles.area_form}>
                <form>
                    <Input name='usuario' placeholder='Usuário, CPF, CNPJ ou E-mail' type='text' />
                    <ButtonComponent text="Continuar" onClick={() => setEtapa(3)} type='submit' />
                    <ButtonComponent bgColor="transparent" color="#707070" border={true} text="Cancelar" onClick={() => setEtapa(1)} type='button' />
                </form>
            </div>
            <span className={styles.info} onClick={() => alert('Suporte do Kinx')}>
                Entre em contato com o <strong>Suporte do Kinx</strong> caso você não tenha acesso.
            </span>
        </div>
    )
}

export default TelaEncontrarConta;