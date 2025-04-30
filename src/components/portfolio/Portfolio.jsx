import React from 'react';
import PortfolioItem from '../portfolioItem/PortfolioItem';
import './Portfolio.scss';
import Button from '../button/Button';

const Portfolio = () => {
    const tech = {
        javascript: {
            "name":"javascript", 
            "color":"linear-gradient(90deg, #ff6a00, #ee0979)"
        },
        react: {
            "name":"react", 
            "color":"linear-gradient(90deg, #02fc0f, #005f30)"
        },
        bootstrap: {"name":"bootstrap", 
            "color":"linear-gradient(90deg, #00a2ff, #002a77)"
        },
        marvelAPI: {
            "name":"marvel-api", 
            "color":"linear-gradient(90deg, #00a2ff, #002a77)"
        },
        reduxToolkit: {"name":"redux-toolkit", 
            "color":"linear-gradient(90deg, #02fc0f, #005f30)"
        }
    }
    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio__content container">
                <h2 data-aos="fade-up" className="portfolio__title">Portfolio.</h2>
                <div className="portfolio__list">
                    <PortfolioItem photoSrc="/no-photo.jpg" name="Employees list project." description="App created for practice react in the start my learning React using Classes. 
                            In this app you can check list of employees, filter them by name, salary, performance(having a star), mark them for performance, change their salary, 
                            add a new employee and delete employee from the list." technologies={[tech.javascript, tech.react, tech.bootstrap]} link="https://github.com/zakhartereshchenko/employees-list-project-1"/>
                    <PortfolioItem photoSrc="/no-photo.jpg" name="Marvel project." description="App created for practice with React Hooks and work with API. In this app you
                            can check list of all available Marvel heroes and comics, find some info
                            about them, find a hero by name and get random hero from the list by click." technologies={[tech.javascript, tech.react, tech.marvelAPI]} link="https://github.com/zakhartereshchenko/marvel-project"/>
                    <PortfolioItem photoSrc="/no-photo.jpg" name="Todo list." description="This is a todo list application built to practice with Redux toolkit and
                            showcase my front-end development skills. It allows users to add, delete,
                            manage, and track their tasks." technologies={[tech.javascript, tech.react, tech.reduxToolkit]} link="https://github.com/zakhartereshchenko/todo-list"/>
                    {/* <div data-aos="fade-right" className="portfolio__item project">
                        <img src="/no-photo.jpg" alt="Project 1" />
                        <div className='project__name'>Employees list project.</div>
                        <p className='project__description'>App created for practice react in the start my learning React using Classes.
                            In this app you can check list of employees, filter them by name, salary,
                            performance(having a star), mark them for performance, change their
                            salary, add a new employee and delete employee from the list.</p>
                        
                        <ul className='project__technologies'>
                            <li style={{color:"transparent", background:"linear-gradient(90deg, #ff6a00, #ee0979)", backgroundClip:"text"}}>#javascript</li>
                            <li style={{color:"transparent", background:"linear-gradient(90deg, #02fc0f, #005f30)", backgroundClip:"text"}}>#react</li>
                            <li style={{color:"transparent", background:"linear-gradient(90deg, #00a2ff, #002a77)", backgroundClip:"text"}}>#bootstrap</li>
                        </ul>
                        <div className="project__buttons">
                            <Button text="View(unavailable)" color="#444"/>
                            <a href="https://github.com/zakhartereshchenko/employees-list-project-1" target="_blank">
                                <Button text="GitHub"/>
                            </a>
                            
                        </div>
                    </div> */}
                    {/* <div data-aos="fade-left" className="portfolio__item project">
                        <img src="/no-photo.jpg" alt="Project 2" />
                        <div className='project__name'>Marvel project.</div>
                        <p className='project__description'>App created for practice with React Hooks and work with API. In this app you
                            can check list of all available Marvel heroes and comics, find some info
                            about them, find a hero by name and get random hero from the list by click.</p>
                        
                        <ul className='project__technologies'>
                            <li style={{color:"transparent", background:"linear-gradient(90deg, #00a2ff, #002a77)", backgroundClip:"text"}}>#javascript</li>
                            <li style={{color:"transparent", background:"linear-gradient(90deg, #ff6a00, #ee0979)", backgroundClip:"text"}}>#react</li>
                            <li style={{color:"transparent", background:"linear-gradient(90deg, #02fc0f, #005f30)", backgroundClip:"text"}}>#marvel-api</li>
                        </ul>
                        <div className="project__buttons">
                            <Button text="View(unavailable)" color="#444"/>
                            <a href="https://github.com/zakhartereshchenko/marvel-project" target="_blank">
                                <Button text="GitHub"/>
                            </a>
                        </div>
                    </div> */}
                    {/* <div data-aos="fade-right" className="portfolio__item project">
                        <img src="/no-photo.jpg" alt="Project 3" />
                        <div className='project__name'>Todo list.</div>
                        <p className='project__description'>This is a todo list application built to practice with Redux toolkit and
                            showcase my front-end development skills. It allows users to add, delete,
                            manage, and track their tasks.</p>
                        
                        <ul className='project__technologies'>
                            <li style={{color:"transparent", background:"linear-gradient(90deg, #ff6a00, #ee0979)", backgroundClip:"text"}}>#javascript</li>
                            <li style={{color:"transparent", background:"linear-gradient(90deg, #00a2ff, #002a77)", backgroundClip:"text"}}>#react</li>
                            <li style={{color:"transparent", background:"linear-gradient(90deg, #02fc0f, #005f30)", backgroundClip:"text"}}>#redux-toolkit</li>
                        </ul>
                        
                        <div className="project__buttons">
                            <Button text="View(unavailable)" color="#444"/>
                            <a href="https://github.com/zakhartereshchenko/todo-list" target="_blank">
                                <Button text="GitHub"/>
                            </a>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
    );
}

export default Portfolio;