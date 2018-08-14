var fetch = require('node-fetch')

const gitHub = {
    getRepositories() {

        return fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': process.env.github_token 
            },
            body: JSON.stringify({ query: `
                query {
                    viewer {
                        name
                         repositories(last: 3) {
                           nodes {
                             name
                             createdAt
                             url
                             homepageUrl
                             languages(first: 5) {
                                 nodes {
                                     name
                                 }
                             }
                           }
                         }
                       }
                }
            `})
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.data.viewer.repositories.nodes)
            return res.data
        })
    }
}

module.exports = gitHub