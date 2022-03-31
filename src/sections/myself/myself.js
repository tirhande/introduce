import React, { useEffect } from "react";

import selfie from  '../../assets/images/selfie2.png';
import styles from './myself.module.css';

const Myself = () => {
    return (
        <section className={styles.wrap}>
            <h1 className={styles.myself_title}>Introduce Myself</h1>
            <div className={styles.contents}>
                <article className={styles.picture}>
                    <div className={styles.selfie_frame}>
                        <div className={styles.selfie} style={{backgroundImage:"url(" + selfie + ")"}}>
                        </div>
                    </div>
                </article>
                <article className={styles.description}>
                </article>
                <article className={styles.others}>
                </article>
            </div>
            {/* <div className={styles.contents}>
                <div className={styles.box}>
                    <article className={styles.picture}>
                        <div className={styles.selfie_frame}>
                            <div className={styles.selfie} style={{backgroundImage:"url(" + selfie + ")"}}>
                            </div>
                        </div>
                    </article>
                    <article className={styles.description}>
                    </article>
                </div>
                <div className={styles.box2}>
                    <article className={styles.others}>
                    </article>
                </div>
            </div> */}
        </section>
    )
}

export default Myself;