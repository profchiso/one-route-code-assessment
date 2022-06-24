const express = require("express")
const { validationResult } = require('express-validator');
const axios = require("axios")
const { connectionValidation } = require("../utils/validations")
const db = require("../models/index")

const webhookRouter = express.Router();
webhookRouter.post("/", async(req, res) => {
    try {
        console.log("messages", req.body.messages[0]) //

        const savedMessage = await db.messages.create({ recipient_type: "individual", to: req.body.messages[0].from == process.env.USER_NUMBER ? process.env.SANDBOX_NUMBER : process.env.USER_NUMBER, from: req.body.messages[0].from != process.env.USER_NUMBER ? process.env.SANDBOX_NUMBER : process.env.USER_NUMBER, type: req.body.messages[0].type, timestamps: req.body.messages[0].timestamp })
        const savedMessageBody = await db.messageBody.create({ messageId: savedMessage.id, body: req.body.messages[0].text.body, timestamps: req.body.messages[0].timestamp })
        const message = await db.messages.findAll({ where: { id: savedMessage.id }, include: ["text"] })
        res.status(200).json({ success: true, data: message })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, errors: [{ message: error.message || "internal server error" }] })

    }
})

webhookRouter.post("/set-url", connectionValidation, async(req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ succes: false, errors: errors.array() });
        }
        const { url } = req.body
        let setUrl = await axios.post(`${process.env.SANDBOX_BASE_URL}/v1/configs/webhook`, { url }, {
            headers: {
                "D360-API-KEY": `${process.env.WABA_SANDBOX_API_KEY}`,
                "content-type": "application/json"
            }
        })
        let data = setUrl.data
        console.log("set webhook url", setUrl.data)
        res.status(200).json({ success: true, data });


    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, errors: [{ message: error.message || "internal server error" }] })

    }
})

module.exports = {
    webhookRouter
}