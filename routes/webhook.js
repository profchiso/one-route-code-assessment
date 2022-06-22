const express = require("express")

const webhookRouter = express.Router();
webhookRouter.post("/")

module.exports = {
    webhookRouter
}