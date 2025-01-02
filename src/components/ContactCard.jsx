import React from 'react'
import Tooltip from '@mui/material/Tooltip';


function ContactCard({ contact = '', img = '', color = 'lightgray', url, ...props }) {

    function gotoURL() {
        if (url)
            window.open(url, '_blank')
    }

    return (
        <Tooltip title={contact} placement='top'>

            <div className='contactcard' onClick={gotoURL} {...props}>

                <div className="skill_fg" style={{ boxShadow: `4px 5px 10px 0px ${color}` }}>
                    <img src={'/logos/' + img + '.png'} />
                    <div className='glass'
                    //  style={{ backgroundColor: `${color}` }}
                    >
                        <img src={'/logos/' + img + '.png'} />
                    </div>
                </div>

            </div>
        </Tooltip>
    )
}

export default ContactCard