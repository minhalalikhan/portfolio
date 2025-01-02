import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

import { Repos } from '../ProjectsData';



function Projects() {

    // const [Repos, setRepos] = useState([
    // ])
    async function getRepos() {

        try {

            const response = await fetch(`https://api.github.com/users/minhalalikhan/repos`);


            if (response.ok) {
                const data = await response.json()
                setRepos(data)
            }
        } catch (e) {
            console.log('err occured ')
        }
    }

    useEffect(() => {
        // getRepos()
    }, [])



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