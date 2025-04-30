import React from 'react';
import Button from '../button/Button';
import './Contact.scss';
import UserIcon from '/name.svg';
import EmailIcon from '/email.svg';
import MessageIcon from '/message.svg';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div data-aos="fade-up" className="container">
                <div className="education__title">
                    Contact.
                </div>
                <form className="contact__form" action="/submit" method="POST">
                    <div className="contact__form-title">
                        <div className="contact__form-data">
                            <label htmlFor="name"><img src={UserIcon} alt="name" />Name</label>
                            <input type="text" id="name" name="name" required /><br /><br />
                        </div>
                        <div className="contact__form-data">
                            <label htmlFor="email"><img src={EmailIcon} alt="email" />Email</label>
                            <input type="email" id="email" name="email" required /><br /><br />
                        </div>
                    </div>
                    <div className="contact__form-message">
                        <label htmlFor="message"><img src={MessageIcon} alt="message" />Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea><br /><br />
                    </div>
                    

                    <Button text="Unavailable" submit="true" color="#444"/>
                </form>
            </div>
        </section>
    )
}

export default Contact; 