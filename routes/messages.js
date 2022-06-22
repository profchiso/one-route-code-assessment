const express = require("express")

const messageRouter = express.Router();
messageRouter.post("/text")
messageRouter.post("/template")
messageRouter.get("/:id")
messageRouter.get("interactions")


module.exports = {
    messageRouter
}