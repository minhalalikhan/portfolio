import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <h2>Minhal </h2>

            <div className='CTA'>
                <a href='#home'>

                    <p>Home</p>
                </a>
                <a href='#about'>
                    <p>About</p>
                </a>
                <a href='#skills'>
                    <p>Skills</p>
                </a>
                <a href='#projects'>
                    <p>Projects</p>
                </a>
                <a href='#contact'>
                    <p>contact</p>
                </a>
            </div>
        </div>
    )
}

export default Navbar