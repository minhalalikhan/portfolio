import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

import Repos from '../data/data.json';



function Projects() {


    return (
        <section id='projects'>
            <p className='heading'>
                Projects

            </p>
            <div className="projectsgrid">
                {
                    Repos.slice(0, 10).map((repo, i) => {
                        return <ProjectCard repo={repo} key={i} />

                    })
                }
                {
                    Repos.length === 0 && <p className='noprojects'>
                        No Repos to show at the moment !!
                    </p>
                }
            </div>
        </section>
    )
}

export default Projects