import React from 'react'

function SkillCard({ skill = '', img = '', color = 'lightgray' }) {
    return (
        <div className='skillcard'>

            <div className="skill_fg" style={{ boxShadow: `4px 5px 10px 0px ${color}` }}>
                <img src={'./logos/' + img + '.png'} />
                <div className='glass'
                //  style={{ backgroundColor: `${color}` }}
                >
                    <img src={'./logos/' + img + '.png'} />
                </div>
            </div>

        </div>
    )
}

export default SkillCard