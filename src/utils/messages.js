const geneareteMessage = (username, text) => {
    return {
        username,
        text,
        createdAt : new Date().getTime()
    }
}
const geneareteLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt : new Date().getTime()
    }
}

module.exports = {
    geneareteMessage,
    geneareteLocationMessage
}