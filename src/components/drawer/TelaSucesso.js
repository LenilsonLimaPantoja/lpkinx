import styles from './TelaSucesso.module.scss'
import { useState } from 'react';
import { SiGoogle } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaRegCircleCheck, FaXTwitter } from "react-icons/fa6";
import Input from './Input';
import ButtonComponent from './ButtonComponent';

const TelaSucesso = ({ setEtapa }) => {
    return (
        <div className={styles.area_1}>
            <div className={styles.area_form}>
                <FaRegCircleCheck />
                <span>Senha alterada com Sucesso!</span>
                <p>Faça o login novamente com a nova senha.</p>
                <ButtonComponent text="Voltar ao Login" onClick={() => setEtapa(1)} type='button' />
            </div>
        </div>
    )
}

export default TelaSucesso;