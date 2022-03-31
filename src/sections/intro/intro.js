import React from "react";
import styles from './intro.module.css';

import Scroll from "../../component/scroll";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), Fade(), ZoomIn());
const LeftToRight = batch(Fade(), ZoomIn(), Sticky(42, 40), MoveIn(-1000, 0));
const RightToLeft = batch(Fade(), ZoomIn(), Sticky(62, 60), MoveIn(1000, 0));

const Intro = () => {
    return (
        <section className={styles.wrap}>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <span className={styles.name}>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>Kim Kyung-Hun</Animator>
                    </span>
                    <Animator animation={batch(Fade(), Sticky(50, 100))}>
                        <Scroll />
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                    <span className={styles.prefix}>
                        <Animator animation={LeftToRight}>FRONT-END ☀️</Animator>
                        <Animator animation={RightToLeft}>⛅️ BACK-END</Animator>
                    </span>
                    </div>
                </ScrollPage>
                <ScrollPage page={2}>
                    <span className={styles.noun}>
                        <Animator animation={ZoomInScrollOut}>Developer</Animator>
                    </span>
                </ScrollPage>
            </ScrollContainer>
        </section>
    )
}

export default Intro;