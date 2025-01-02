import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
    return (
        <section id='skills'>
            <p className='heading'>
                Skills
            </p>
            <div className="skillshowcase">
                <SkillCard color='orange' skill='html' img='html' />
                <SkillCard color='#66309a' skill='css' img='css' />
                <SkillCard color='yellow' skill='JS' img='js' />
                <SkillCard color='#00d8ff' skill='react' img='react' />
                <SkillCard color='#d2d2d2' skill='Next' img='next' />
                <SkillCard color='#c2fb7d' skill='node' img='node' />
                <SkillCard color='#1d63ed' skill='docker' img='docker' />
                <SkillCard color='#e2c786' skill='mysql' img='mysql' />
                <SkillCard color='#f03c2e' skill='git' img='git' />
                <SkillCard color='gray' skill='Next' img='github' />
                <SkillCard color='#5c6bc0' skill='C++' img='cpp' />
            </div>
        </section>
    )
}

export default Skills