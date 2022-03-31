import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './skill.module.css';

import { ReactComponent as ReactSVG } from  '../../assets/images/logo/react.svg';
import { ReactComponent as NodeSVG } from '../../assets/images/logo/nodejs.svg';
import { ReactComponent as JsSVG } from '../../assets/images/logo/javascript.svg';
import { ReactComponent as PythonSVG } from '../../assets/images/logo/python.svg';
import { ReactComponent as OthersSVG } from '../../assets/images/logo/others.svg';

import { ReactComponent as LinuxSVG } from '../../assets/images/tools/linux.svg';
import { ReactComponent as VsSVG } from '../../assets/images/tools/vscode.svg';
import { ReactComponent as PySVG } from '../../assets/images/tools/pycharm.svg';
import { ReactComponent as SlackSVG } from '../../assets/images/tools/slack.svg';
import { ReactComponent as JiraSVG } from '../../assets/images/tools/jira.svg';
import { ReactComponent as FigmaSVG } from '../../assets/images/tools/figma.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
const Skill = () => {
    const onEnter = (title) => {
        setToolList(toolList.map(el => {
            if(el.title === title) {
                el.isFlipped = true;
            }
            return el;
        }))
    }
    
    const onOut = (title) => {
        setToolList(toolList.map(el => {
            if(el.title === title) {
                el.isFlipped = false;
            }
            return el;
        }))
    }

    const skillList = [
        {
            title: 'React',
            icon: ReactSVG,
            color: '#61dafb',
            contents: ['Redux', 'ES6, Webpack, babel', 'Nginx'],
        },
        {
            title: 'nodejs',
            icon: NodeSVG,
            color: '#689f63',
            contents: ['Redis', 'socket.io, jwt-token', 'PM2'],
        },
        {
            title: 'javascript',
            icon: JsSVG,
            color: '#f0db4f',
            contents: ['Canvas(Pixi), amCharts', 'jQuery'],
        },
        {
            title: 'python',
            icon: PythonSVG,
            color: '#3774a7',
            contents: ['django, drf, drf-yasg', 'paramiko, socket, pysnmp', 'gunicorn'],
        },
        {
            title: 'others',
            icon: OthersSVG,
            color: '#333',
            contents: ['SQL(MariaDB, MS-SQL)', 'C#, PHP', 'HTML5, CSS'],
        },
    ];

    const [toolList, setToolList] = useState([
        {
            title: '운영체제',
            contents: [
                {
                    title: 'Linux',
                    icon: LinuxSVG,
                },
            ],
            isFlipped: false,
        },
        {
            title: 'IDE',
            contents: [
                {
                    title: 'VScode',
                    icon: VsSVG,
                },
                {
                    title: 'PyCharm',
                    icon: PySVG,
                },
            ],
            isFlipped: false,
        },
        {
            title: '협업툴',
            contents: [
                {
                    title: 'Slack',
                    icon: SlackSVG,
                },
                {
                    title: 'Jira',
                    icon: JiraSVG,
                },
                {
                    title: 'Figma',
                    icon: FigmaSVG,
                },
            ],
            isFlipped: false,
        },
    ]);

    return (
        <section className={styles.wrap}>
            <h1>Technical Skills</h1>
            <div className={styles.skill_contents}>
                {
                    skillList.map((items, key) => 
                        <section className={styles.each} key={key}>
                            <div className={styles.skill_logo_wrap}>
                                {
                                    items.title === 'python' ?
                                    <span className={`${styles.skill_logo_python} ${styles.skill_logo}`}><items.icon width="60" height="60"/></span>
                                    : <span className={styles.skill_logo} style={{borderColor:items.color}}><items.icon width="60" height="60"/></span>
                                    }
                            </div>
                            <div className={styles.card_contents}>
                                <h2 style={{color: items.color}}>{items.title}</h2>
                                {
                                    items.contents.map((item, idx) => 
                                        <p key={idx}>{item}</p>
                                    )
                                }
                            </div>
                        </section>
                    )
                }
            </div>
            <h1>Development Tools</h1>
            <div className={styles.tools_contents}>
            {
                toolList.map((items, key) => 
                    <section onMouseOver={() => onEnter(items.title)} onMouseLeave={() => onOut(items.title)} key={key}>
                        <ReactCardFlip isFlipped={items.isFlipped} flipDirection="horizontal">
                            <div className={styles.tools_front_card}>
                                <h2>{items.title}</h2>
                                <p>
                                    <FontAwesomeIcon icon={faCircleQuestion} />
                                </p>
                            </div>
                            <div className={styles.tools_back_card}>
                                {
                                    items.contents.map((item, idx) =>
                                        <div className={styles.tools_logo_wrap} key={idx}>
                                            <div className={styles.tools_logo}><item.icon width="30" height="30" /></div>
                                            <span>{item.title}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </ReactCardFlip>
                    </section>
                )
            }
            </div>
        </section>
    );
}

export default Skill;