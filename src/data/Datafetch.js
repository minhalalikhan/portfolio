import fs from 'fs';
import fetch from 'node-fetch';

// Fetches GitHub public repos and extracts custom data from README files
async function getGithubPublicRepoDetails(username, ) {
    const baseUrl = `https://api.github.com/users/${username}/repos`;

    const importantFields = [];

    try {
        // Fetch public repos
        const repoResponse = await fetch(baseUrl);

        if (!repoResponse.ok) throw new Error(`Error fetching repos: ${repoResponse.status}`);

        const repos = await repoResponse.json();

        for (const repo of repos) {
            const repoDetails = {
                hash: repo.node_id,
                title: repo.name,
                description: repo.description,
                created_at: repo.created_at,
                stars: repo.stargazers_count,
            };

            const readmeUrl = `https://api.github.com/repos/${username}/${repo.name}/readme`;

            try {
                const readmeResponse = await fetch(readmeUrl, { headers });
                if (!readmeResponse.ok) throw new Error("README not found");

                const readmeData = await readmeResponse.json();
                const content = Buffer.from(readmeData.content, 'base64').toString('utf-8');

                // Extract custom hidden tags (e.g., <!-- PORTFOLIO:IMAGE:URL -->, <!-- PORTFOLIO:LANGUAGES:[] -->)
                const imageMatch = content.match(/<!--\s*PORTFOLIO:IMAGE:(.*?)\s*-->/i);
                const languageMatch = content.match(/<!--\s*PORTFOLIO:LANGUAGES:(.*?)\s*-->/i);

                repoDetails.customDetails = {
                    image: imageMatch ? imageMatch[1].trim() : null,
                    languages: languageMatch ? JSON.parse(languageMatch[1].trim()) : [],
                };
            } catch (readmeError) {
                console.warn(`Error fetching README for ${repo.name}:`, readmeError.message);
            }

            importantFields.push(repoDetails);
        }

        // Write the results to data.json
        fs.writeFileSync('data.json', JSON.stringify(importantFields, null, 2));
        console.log("Data successfully written to data.json");

        return importantFields;
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
    }
}


getGithubPublicRepoDetails('minhalalikhan');