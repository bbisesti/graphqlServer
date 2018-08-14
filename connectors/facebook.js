var fetch = require('node-fetch')

const facebook = {
    getProfile() {
        return fetch('https://graph.facebook.com/626072162/feed?&access_token=' + process.env.facebook_access_token)
        .then(res => res.json())
        .then(body => {
            console.log(body)
            return body
        })
    }
}

module.exports = facebook