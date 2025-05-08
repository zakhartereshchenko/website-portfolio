import React from 'react';
import './AboutMe.scss';
import Button from '../button/Button';
import Photo from "/photo-1.jpg";
import TechnologistSVG from "/technologist.svg";
import DevelopmentSVG from "/development.svg";
import KnowledgeSVG from "/knowledge.svg";

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <div className="container">
                <div data-aos="fade-up" className="about-me__title">Overview.</div>
                <div className="about-me__content ">
                    <img data-aos="fade-right" className="about-me__photo" src={Photo} alt="photo" />
                    <div data-aos="fade-left" className="about-me__section">
                        <ul className="about-me__list">
                            <li className="about-me__item"><img src={TechnologistSVG} alt="technologist" /><p>I'm a frontend developer with a strong drive to grow into a full-stack developer.</p></li>
                            <li className="about-me__item"><img src={DevelopmentSVG} alt="development" /><p>I love building clean, responsive interfaces and turning tricky design ideas into smooth, usable websites that just feel right.</p></li>
                            <li className="about-me__item"><img src={KnowledgeSVG} alt="knowledge" /><p>I'm always curious and constantly learning.</p></li>
                        </ul>
                        <div className="about-me__links">
                            <a href="cv-.pdf" download>
                                <Button text="Resume" />
                            </a>
                            <a href="https://github.com/zakhartereshchenko" target="_blank">
                                <Button text="Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/zakhartereshchenko/" target="_blank">
                                <Button text="LinkedIn" />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    );
}

export default AboutMe;