import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Сегодня JavaScript может выполняться не только в браузере, но и на сервере или на любом другом устройстве, которое имеет специальную программу, называющуюся «движком» JavaScript."}/>
                    <Skill title={"CSS"} description={"Как и HTML, CSS на самом деле не является языком программирования. Это не язык разметки - это язык таблицы стилей. Это означает, что он позволяет применять стили выборочно к элементам в документах HTML."}/>
                    <Skill title={"React"} description={"React — это декларативная, эффективная и гибкая JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет вам собирать сложный UI из маленьких изолированных кусочков кода, называемых «компонентами»."}/>


                </div>
            </div>
        </div>
    );
}

export default Skills;
