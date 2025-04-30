import React from 'react';
import './Skills.scss';
import SkillsItem from '../skillsItem/SkillsItem';
import JSIcon from '/js.svg';
import ReactIcon from '/react.svg';
import HTMLIcon from '/html.svg';
import CSSIcon from '/css.svg';
import TailwindIcon from '/tailwind.svg';
import BootstrapIcon from '/bootstrap.svg';
import TSIcon from '/ts.svg';
import ReduxIcon from '/redux.svg';
import WebpackIcon from '/webpack.svg';
import ViteIcon from '/vite.svg';
import MySQLIcon from '/mysql.svg';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="skills__content">
                    <h2 data-aos="fade-up" className="skills__title">Skills.</h2>
                    <ul data-aos="fade-up" className="skills__list">
                        <SkillsItem imgSrc={JSIcon} techName="JavaScript"/>
                        <SkillsItem imgSrc={ReactIcon} techName="React"/>
                        <SkillsItem imgSrc={HTMLIcon} techName="HTML"/>
                        <SkillsItem imgSrc={CSSIcon} techName="CSS"/>
                        <SkillsItem imgSrc={TailwindIcon} techName="Tailwind"/>
                        <SkillsItem imgSrc={BootstrapIcon} techName="Bootstrap"/>
                        <SkillsItem imgSrc={TSIcon} techName="TypeScript"/>
                        <SkillsItem imgSrc={ReduxIcon} techName="Redux"/>
                        <SkillsItem imgSrc={WebpackIcon} techName="Webpack"/>
                        <SkillsItem imgSrc={ViteIcon} techName="Vite"/>
                        <SkillsItem imgSrc={MySQLIcon} techName="MySql"/>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills;