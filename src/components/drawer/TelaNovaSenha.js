import styles from './TelaNovaSenha.module.scss'
import { useState } from 'react';
import { SiGoogle } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Input from './Input';
import ButtonComponent from './ButtonComponent';

const TelaNovaSenha = ({ setEtapa }) => {
    return (
        <div className={styles.area_1}>
            <div className={styles.titulo_text}>
                <span>Agora você necessita alterar sua senha</span>
                <p>Você precisa cadastrar uma nova senha de 8 dígitos com letras e Números, e se preferir caracteres especiais.</p>
            </div>
            <div className={styles.area_form}>
                <form>
                    <Input name='usuario' placeholder='Digite sua Nova Senha' type='password' />
                    <Input name='usuario' placeholder='Repita sua Senha' type='password' />
                    <ButtonComponent text="Continuar" onClick={() => setEtapa(6)} type='button' />
                    <ButtonComponent bgColor="transparent" color="#707070" border={true} text="Cancelar" onClick={() => setEtapa(1)} type='button' />
                </form>
            </div>
            <span className={styles.info} onClick={() => alert('Suporte do Kinx')}>
                Entre em contato com o <strong>Suporte do Kinx</strong> caso você não tenha acesso.
            </span>
        </div>
    )
}

export default TelaNovaSenha;