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
                        repositories(last: 100) {
                        nodes {
                            name
                            createdAt
                            url
                            homepageUrl
                            primaryLanguage {
                                name
                            }
                            languages(first: 5) {
                                edges {
                                    node {
                                        name
                                        color
                                    }
                                    size
                                }
                            }
                            defaultBranchRef {
                                target {
                                    ...on Commit {
                                        history(since: "2010-01-01T00:00:00+00:00") {
                                            totalCount
                                        }
                                    }
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
            // console.log(res.data.viewer.repositories.defaultBranchRef)
            return res.data
        })
    }
}

module.exports = gitHub