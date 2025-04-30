import React from 'react'
import './PortfolioItem.scss'


const PortfolioItem = ({ photoSrc, name, description, technologies, link}) => {
    return (
        <div data-aos="fade-right" className="portfolio__item project">
            <img src={photoSrc} alt="photo of project" />
            <div className='project__name'>{name}</div>
            <p className='project__description'>{description}</p>
            
            <ul className='project__technologies'>
                {
                    technologies ? technologies.forEach((item) => (<li style={{color:"transparent", background:item.color, backgroundClip:"text"}}>#{item.text}</li>))
                                : <li style={{color:"transparent", background:"linear-gradient(90deg, #3b3b3b, #000000)", backgroundClip:"text"}}>#technologies were not specified</li>
                }
            </ul>
            <div className="project__buttons">
                <Button text="View(unavailable)" color="#444"/>
                <a href={link} target="_blank">
                    <Button text="GitHub"/>
                </a>
                
            </div>
        </div>
    )
}

export default PortfolioItem;