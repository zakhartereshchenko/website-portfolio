import React from 'react'
import Button from '../button/Button'
import './PortfolioItem.scss'


const 
PortfolioItem = ({ photoSrc, name, description, technologies, link}) => {
    return (
        <div data-aos="fade-up" className="portfolio__item project">
            <div className="project__photo">
                <img src={photoSrc} alt="photo of project" />
                <div className="overlay"></div>
            </div>
            
            <div className='project__name'>{name}</div>
            <p className='project__description'>{description}</p>
            
            <ul className='project__technologies'>
                {
                    technologies ? technologies.forEach((item) => (<li style={{color:"transparent", background:item.color, backgroundClip:"text"}}>#{item.text}</li>))
                                : <li style={{color:"transparent", background:"linear-gradient(90deg, #3b3b3b, #000000)", backgroundClip:"text"}}>#technologies were not specified</li>
                }
            </ul>
            <div className="project__buttons">
                <a href={link} target="_blank">
                    <Button text="View(unavailable)" color="#444"/>
                </a>
                
                <a href={link} target="_blank">
                    <Button text="GitHub"/>
                </a>
                
            </div>
        </div>
    )
}

export default PortfolioItem;