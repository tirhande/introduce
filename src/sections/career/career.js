import React from "react";
import styles from './career.module.css';

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faPlane, faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";

const Career = () => {
  return (
    <section className={styles.wrap}>
      <h1>Work Career Timeline</h1>
      <VerticalTimeline className={styles.timeline}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderRadius:"15px", color: "#000" }}
          date="2018 - 현재"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">선임 연구원</h3>
          <h4 className={styles.subtitle}>(주)에스티엔인포텍 @ 경기도 광명</h4>
          <p>
            Javascript / Python / MariaDB<br />
            ReactJS | Node.js | django | paramiko | PixiJS | amCharts
          </p>
          <h2 className={styles.subtitle}>개발1 파트장, UI/UX, PM</h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#000" }}
          date="2014 - 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faPlane} />}
        >
          <h3 className="vertical-timeline-element-title">개인 사업자 / 해외배송대행</h3>
          <h4 className={styles.subtitle}>GLOEX @ 서울</h4>
          <p>
            사이트 운영/관리/개발
          </p>
          <p>
            PHP / MySQL / GNUBOARD
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2014"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">연구원</h3>
          <h4 className={styles.subtitle}>삼화통신공업(주) @ 서울 금천</h4>
          <p>NMS 개발 및 유지보수</p>
          <p>C# / .Net / jQuery / MS-SQL</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            학점은행
          </h3>
          <p>정보통신공학</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            한국 폴리텍 II 대학 인천캠퍼스
          </h3>
          <p>컴퓨터 정보과</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faStar} />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Career;
