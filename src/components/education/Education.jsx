import React from 'react';
import './Education.scss';
import UniversityIcon from '/university.svg';
import SchoolIcon from '/school.svg';

const Education = () => {
    return (
        <section className="education" id="education">
            <div data-aos="fade-up" className="education__title">
                Education.
            </div>
            <div  className="education__timeline timeline">
                <div className="timeline__container left-container">
                    <img src={UniversityIcon} alt="" className="timeline__img" />   
                    <div className="timeline__card">
                        <div className="timeline__title">Applied informatics</div>
                        <p className="timeline__descr">The State School of Higher Education in Chelm, Poland 🇵🇱  </p>
                        <div className="timeline__period">2019 - 2022</div>
                        
                        <span className="timeline__left-container-arrow"></span>
                    </div>
                </div>
                <div className="timeline__container right-container">
                    <img src={SchoolIcon} alt="" className="timeline__img" />
                    <div className="timeline__card">
                        <div className="timeline__descr">High School №97 in Dnipro, Ukraine 🇺🇦</div>
                        <div className="timeline__period">2015 - 2018</div>
                        <span className="timeline__right-container-arrow"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;

