const express = require("express")

const messageRouter = express.Router();
messageRouter.post("/text", () => "message")
messageRouter.post("/template", () => "message")
messageRouter.get("/:id", () => "message")
messageRouter.get("interactions", () => "message")


module.exports = {
    messageRouter
}