import React from 'react';
import style from './Footer.module.css';


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerNavContainer}>
                <h3>Svetlana RedNose</h3>
                <div className={style.footerNav}>
                    <div className={style.text}></div>
                    <div className={style.text}></div>
                    <div className={style.text}></div>
                    <div className={style.text}></div>
                </div>
                <h4> © 2022 Светлана Красноносеньких, по всем вопросам пишите по адресу svetik_palchik81@gmail.com</h4>
            </div>
        </div>
    );
}

export default Footer;
