const axios = require("axios")
class webhook {
    constructor(url) {
        this.url = url
    }
    async setWebhookURL() {

        try {
            console.log(this.url)
            let setUrl = await axios.post(`${process.env.SANDBOX_BASE_URL}/v1/configs/webhook`, { url: this.url }, {
                headers: {
                    "D360-API-KEY": `${process.env.WABA_SANDBOX_API_KEY}`,
                    "content-type": "application/json"
                }
            })
            console.log("set webhook url", setUrl.data)
        } catch (error) {
            console.log(error)
        }


    }
}

module.exports = {
    webhook
}