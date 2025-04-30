import React from 'react';
import './SkillsItem.scss';

const SkillsItem = ({ imgSrc, techName }) => {
    return (
        <li className="skills__item">
            <img src={imgSrc} alt={techName} />
        </li>
    )
}

export default SkillsItem;