const express = require("express")
const { validationResult } = require('express-validator');
const axios = require("axios")
const { connectionValidation } = require("../utils/validations")

const connectionRouter = express.Router();
connectionRouter.post("/", connectionValidation, async(req, res) => {
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
    connectionRouter
}