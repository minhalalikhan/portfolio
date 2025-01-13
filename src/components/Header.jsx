import React from 'react'

function Header() {
    return (
        <section className='header' id='home'>

            <div className="HeaderText">
                <p style={{ fontSize: '24px' }}>Full Stack Developer</p>
                <p style={{ fontSize: '60px', fontWeight: '700' }}>Minhal Ali Khan</p>
                <p style={{ color: '#303030', minWidth: '500px', width: '80%' }}>
                    Exploring the endless possibilities of tech, one project at a time.

                </p>
            </div>
            <div className="HeaderImage">
                <img src='./favicon.jpg' />
            </div>
        </section>
    )
}

export default Header