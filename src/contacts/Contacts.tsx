import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.form}`}>
                <h3>Contacts</h3>
                <form className={style.input}>
                    <input/>
                    <input/>
                    <textarea className={style.textarea}/>
                </form>
                <div>
                    <button className={style.button}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
