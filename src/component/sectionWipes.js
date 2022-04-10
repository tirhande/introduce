import React, { useEffect, useState } from "react";
import Intro from "../sections/intro/intro"; 
import Myself from "../sections/myself/myself"; 
import Career from "../sections/career/career";
import Project from "../sections/project/project";
import Skill from "../sections/skill/skill";
import TopButton from "./topButton";

const SectionWipes = () => {
    const [topVisible, setTopVisible] = useState(false);

    const scrollHandler = (e) => {
        setTopVisible(window.scrollY > 1897 ? true : false);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    return (
        <div>
            <Intro />
            <Myself />
            <Career />
            <Skill />
            {/* <Project /> */}
            {topVisible && <TopButton />}
        </div>
    )
}

export default SectionWipes;