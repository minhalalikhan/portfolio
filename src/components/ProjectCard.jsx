import React, { useEffect, useState } from 'react'

function ProjectCard({ repo }) {

    const [Readme, setReadme] = useState()

    async function fetchReadme() {
        try {
            const response = await fetch(`https://api.github.com/repos/minhalalikhan/${repo.name}/readme`);
            if (response.ok) {
                const data = await response.json();
                const decodedContent = atob(data.content);
                setReadme(decodedContent)
                // Decode Base64 content
                // console.log(`README for ${repo}:`, decodedContent);
                parseReadme(decodedContent)
                // return decodedContent;
            } else {
                // console.log(`No README found for ${repo}: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.log(`Error fetching README for ${repo}:`, error);
            return null;
        }
    }

    function parseReadme(content) {
        const result = {};

        // Extract main image
        const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
        result.image = imageMatch ? imageMatch[1] : "No image found";

        // Extract short intro (first paragraph or intro section)
        const introMatch = content.match(/##\s*Introduction\s*([\s\S]*?)(##|$)/);
        result.intro = introMatch ? introMatch[1].trim() : "No introduction found";

        // Extract tags array
        const tagsMatch = content.match(/##\s*Technologies Used\s*([\s\S]*?)(##|$)/);
        if (tagsMatch) {
            result.tags = tagsMatch[1]
                .split("\n")
                .map((line) => line.match(/!\[.*?\]\((.*?)\)/)?.[1])
                .filter(Boolean);
        } else {
            result.tags = [];
        }

        // Extract demo link
        const demoMatch = content.match(/\[Live Demo\]\((.*?)\)/);
        result.demo = demoMatch ? demoMatch[1] : "No demo link found";

        setReadme(result);
    }


    useEffect(() => {

        // fetchReadme()
    }, [repo])
    return (
        <div className='projectCard'>
            <div className='repoImage'>
                {/* img */}
                <img src={'./Projects/' + repo.img} />
            </div>
            <div className='repo_details'>
                <div className='details'>

                    <p className='repo_title'>{repo.title}</p>
                    <p className='repo_desc'>
                        {repo.description}
                    </p>
                    <div className='repo_tags'>
                        {
                            repo.tags.map((tag, i) => {

                                return <Tag name={tag} key={i} />
                            })
                        }

                    </div>
                </div>
                <div className="repo_CTA">

                    <a href={repo.link} target='_blank'>
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