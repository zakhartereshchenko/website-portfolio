import React from 'react';
import './Skills.scss';
import SkillsItem from '../skillsItem/SkillsItem';

const Skills = () => {
    return (
        <>
            <section className="skills" id="skills">
                <div className="container">
                    <div className="skills__content">
                        <h2 data-aos="fade-up" className="skills__title">Skills.</h2>
                        <ul data-aos="fade-up" className="skills__list">
                            <SkillsItem src="js.svg" techName="JavaScript"/>
                            <SkillsItem src="react.svg" techName="React"/>
                            <SkillsItem src="html.svg" techName="HTML"/>
                            <SkillsItem src="css.svg" techName="CSS"/>
                            <SkillsItem src="tailwind.svg" techName="Tailwind"/>
                            <SkillsItem src="bootstrap.svg" techName="Bootstrap"/>
                            <SkillsItem src="ts.svg" techName="TypeScript"/>
                            <SkillsItem src="redux.svg" techName="Redux"/>
                            <SkillsItem src="webpack.svg" techName="Webpack"/>
                            <SkillsItem src="vite.svg" techName="Vite"/>
                            <SkillsItem src="mysql.svg" techName="MySql"/>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;