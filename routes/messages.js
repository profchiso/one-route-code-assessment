const express = require("express")
const { sendMessage, sendTemplateMessage, receiveMessage, listInteractions } = require("../controllers/messages")
const { sendMessageValidation } = require("../utils/validations")

const messageRouter = express.Router();
messageRouter.post("/", sendMessageValidation, sendMessage)
messageRouter.post("/template", sendTemplateMessage)
messageRouter.post("/receive", receiveMessage)
messageRouter.get("interactions", listInteractions)


module.exports = {
    messageRouter
}