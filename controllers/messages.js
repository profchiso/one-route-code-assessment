const { validationResult } = require('express-validator');
const axios = require("axios")
const db = require("../models/index")
exports.receiveMessage = async(req, res) => {
    try {


    } catch (error) {
        console.log(error)

    }
}
exports.sendMessage = async(req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ succes: false, errors: errors.array() });
        }
        const { recipient_type, to, type, text } = req.body
        const { body } = text
        if (!body) {
            return res.status(400).json({ succes: false, errors: [{ field: "text.body", message: "body key in text must have a value" }] });
        }
        console.log(req.body)

        const createdMessage = await db.messages.create({ recipient_type, to, type, from: process.env.SANDBOX_NUMBER, timestamps: new Date().getTime() })
        const createMessageBody = await db.messageBody.create({ body, messageId: createdMessage.id, timestamps: new Date().getTime() })

        let getMessageAndbody = await db.messages.findOne({ where: { id: createdMessage.id }, include: ["text"] })
        console.log(getMessageAndbody)

        res.status(201).json({ success: true, data: getMessageAndbody })


    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, errors: [{ message: error.message || "internal server error" }] })
    }
}
exports.sendTemplateMessage = async(req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}
exports.listInteractions = async(req, res) => {
    try {
        const interactions = await db.messages.findAll({ where: req.query, include: ["text"] })
        res.status(200).json({ success: true, data: interactions })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, errors: [{ message: error.message || "internal server error" }] })

    }
}