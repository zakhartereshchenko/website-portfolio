import './Intro.scss';
import Button from '../button/Button';

const Intro = () => {
    return (
        <section className="intro">
            <video autoPlay="autoplay" loop src="/warsaw_footage.mp4" muted="muted" className="intro__background" ></video>
            <div className="intro__mask"></div>
            <div data-aos="zoom-in" className="intro__content container">
                <div className="intro__title">Hi, I'm <span className='aqua-color'>Zakhar</span></div>
                <div className="intro__subtitle">I'm a <span className='orange-color'>Front End Developer</span> from <span className='aqua-color'>Warsaw</span></div>
                <div className='intro__text'>Welcome to my portfolio</div>
            </div>
        </section>
    );
}
export default Intro;   