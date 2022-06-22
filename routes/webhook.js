const express = require("express")

const webhookRouter = express.Router();
webhookRouter.post("/", async(req, res) => {
    try {

    } catch (error) {
        console.log(error)

    }
})

module.exports = {
    webhookRouter
}