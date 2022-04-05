import React, { useState } from "react";

import selfie from  '../../assets/images/selfie.png';
import styles from './myself.module.css';

import PortFolioDialog from '../../component/dialog';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from 'react-redux';
import { setDialogOpen } from '../../redux/reducer/myselfSlice'
import { useMediaQuery } from "react-responsive"

const Myself = () => {
    const isMobile = useMediaQuery({
        query : "(max-width:768px)"
    });
    

    const dispatch = useDispatch();

    const openDialog = () => {
        dispatch(setDialogOpen(true));
    }

    const pdfDownload = () => {
        window.open('./portfolio_kkh.pdf');
    }


    return (
        <section className={styles.wrap}>
            <h1 className={styles.myself_title}>Introduce Myself</h1>
            <div className={styles.contents}>
                <div className={styles.box_top}>
                    <article className={styles.picture}>
                        <div className={styles.selfie_frame}>
                            <div className={styles.selfie} style={{backgroundImage:"url(" + selfie + ")"}}>
                            </div>
                        </div>
                    </article>
                    <article className={styles.description}>
                        <h2>김경훈</h2>
                        <h3>프론트 & 백 엔드 개발자</h3>
                        <h3>
                            <FontAwesomeIcon icon={faGithub} size='2x' />
                            <FontAwesomeIcon icon={faFilePdf} size='2x' onClick={!isMobile ? openDialog : pdfDownload}/>
                        </h3>
                        <p>프론트와 백엔드, 그리고 서버 구축까지의 경험이 있는 풀스택 개발자입니다.</p>
                        <p>React, Nodejs, javascript, Python, django, Canvas, MySQL, OS</p>
                    </article>
                    {!isMobile && <PortFolioDialog />}
                </div>
                <div className={styles.box_bottom}>
                    <article className={styles.others}>
                    </article>
                </div>
            </div>
            
        </section>
    )
}

export default Myself;