import axios from 'axios'

const KEY = 'AIzaSyAOeOa0Oh6n82EJSQB30qCsUP6ngA3fEok'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})