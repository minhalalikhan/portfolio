import React, { useEffect, useState } from 'react'

function ProjectCard({ repo }) {

    const [Readme, setReadme] = useState()


    return (
        <div className='projectCard'>
            <div className='repoImage'>
                {/* img */}
                {/* <img src={'./Projects/' + repo.img} /> */}
            </div>
            <div className='repo_details'>
                <div className='details'>

                    <p className='repo_title'>{repo.title}</p>
                    <p className='repo_desc'>
                        {repo.description}
                    </p>
                    <div className='repo_tags'>
                        {
                            repo?.tags?.map((tag, i) => {

                                return <Tag name={tag} key={i} />
                            })
                        }

                    </div>
                </div>
                <div className="repo_CTA">

                    <a href={'https://github.com/minhalalikhan/' + repo.title} target='_blank'>
                        Checkout Repo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard


function Tag({ name }) {


    return <div className='Tag'>
        <img src={'./logos/' + name + '.png'} />
        <p>{name}</p>
    </div>
}