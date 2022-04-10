import React, { useState, useEffect, useRef } from "react";

import selfie from  '../../assets/images/selfie.png';
import styles from './myself.module.css';

import PortFolioDialog from '../../component/dialog';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faSplotch } from "@fortawesome/free-solid-svg-icons";
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
            <h1 className={styles.myself_title}>About Me</h1>
            <div className={styles.contents}>
                <div className={styles.box_top}>
                    <article className={styles.picture}>
                        <div className={styles.selfie_frame}>
                            <div className={styles.selfie} style={{backgroundImage:"url(" + selfie + ")"}}>
                            </div>
                        </div>
                        <div className={styles.desc_title}>
                            <span className={styles.name}>김경훈 <span className={styles.year}>(1987)</span></span>
                            <span>
                                <FontAwesomeIcon icon={faGithub} onClick={() => window.open('https://github.com/tirhande', '_blank')}/>
                                <FontAwesomeIcon icon={faFilePdf} onClick={!isMobile ? openDialog : pdfDownload}/>
                            </span>
                        </div>
                    </article>
                    <article className={styles.description}>
                        <h2>프론트 & 백엔드 개발자</h2>
                        <p>프론트와 백엔드, 그리고 서버 구축 경험이 있는 풀스택 개발자이며,</p>
                        <p>호기심과 상상력이 많아 새로운 것들을 탐구하길 좋아합니다.</p>
                        <p>좋아하는 것 : ReactJS, Nodejs, django, Cavnas, 버그 찾기</p>
                        <p>좋아하는 대사 : 우린 답을 찾을것이다. 늘 그랬듯이 (인터스텔라 2014)</p>
                    </article>
                    {!isMobile && <PortFolioDialog />}
                </div>
                <div className={styles.box_bottom}>
                    <article className={styles.others}>
                        <p><FontAwesomeIcon icon={faSplotch} /> 회사 홈페이지, 사내 ERP 개발</p>
                        <p><FontAwesomeIcon icon={faSplotch} /> Linux(Nginx, PM2) 서버 구성, Artillery와 Clinic.js를 사용한 부하 및 성능 테스트</p>
                        <p><FontAwesomeIcon icon={faSplotch} /> drf(django-rest-framework) API 서버 개발, drf-yasg로 swagger 문서 자동화</p>
                        <p><FontAwesomeIcon icon={faSplotch} /> Paramiko 장비 CLI 접속 및 설정 정보 자동 백업 모듈 개발</p>
                        <p><FontAwesomeIcon icon={faSplotch} /> MariaDB Galera Cluster 4중화 구성, SQL-Server 미러링 및 SQL 튜닝</p>
                        <p><FontAwesomeIcon icon={faSplotch} /> Photoshop, illustrator 간단한 작업, AfterEffect로 솔루션 홍보용 미디어 제작 등</p>
                    </article>
                </div>
            </div>
            
        </section>
    )
}

export default Myself;