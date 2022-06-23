const express = require("express")

const webhookRouter = express.Router();
webhookRouter.post("/", async(req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({ success: true, data: req.body })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, errors: [{ message: error.message || "internal server error" }] })

    }
})

module.exports = {
    webhookRouter
}