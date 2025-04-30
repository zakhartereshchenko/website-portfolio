import React from 'react';
import PortfolioItem from '../portfolioItem/PortfolioItem';
import './Portfolio.scss';
import EmptyPhoto from '/no-photo.jpg';
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
                    <PortfolioItem photoSrc={EmptyPhoto} name="Employees list project." description="App created for practice react in the start my learning React using Classes. 
                            In this app you can check list of employees, filter them by name, salary, performance(having a star), mark them for performance, change their salary, 
                            add a new employee and delete employee from the list." technologies={[tech.javascript, tech.react, tech.bootstrap]} link="https://github.com/zakhartereshchenko/employees-list-project-1"/>
                    <PortfolioItem photoSrc={EmptyPhoto} name="Marvel project." description="App created for practice with React Hooks and work with API. In this app you
                            can check list of all available Marvel heroes and comics, find some info
                            about them, find a hero by name and get random hero from the list by click." technologies={[tech.javascript, tech.react, tech.marvelAPI]} link="https://github.com/zakhartereshchenko/marvel-project"/>
                    <PortfolioItem photoSrc={EmptyPhoto} name="Todo list." description="This is a todo list application built to practice with Redux toolkit and
                            showcase my front-end development skills. It allows users to add, delete,
                            manage, and track their tasks." technologies={[tech.javascript, tech.react, tech.reduxToolkit]} link="https://github.com/zakhartereshchenko/todo-list"/>
                    
                </div>
            </div>
        </div>
    );
}

export default Portfolio;