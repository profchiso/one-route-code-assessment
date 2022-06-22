const axios = require("axios")
class webhook {
    constructor(url) {
        this.url = url
    }
    async setWebhookURL() {

        try {
            console.log(this.url)
        } catch (error) {
            console.log(error)
        }


    }
}

module.exports = {
    webhook
}