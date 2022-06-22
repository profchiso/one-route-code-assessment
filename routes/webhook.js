const express = require("express")

const webhookRouter = express.Router();
webhookRouter.post("/text")



module.exports = {
    webhookRouter
}