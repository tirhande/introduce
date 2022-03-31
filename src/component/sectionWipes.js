import React from "react";
import Intro from "../sections/intro/intro"; 
import Myself from "../sections/myself/myself"; 
import Career from "../sections/career/career";
import Project from "../sections/project/project";
import Skill from "../sections/skill/skill";

const SectionWipes = () => (
    <div>
        <Intro />
        <Myself />
        <Career />
        <Skill />
        <Project />
    </div>
)

export default SectionWipes;