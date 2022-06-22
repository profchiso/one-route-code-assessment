require("dotenv").config()
const express = require("express");
const cors = require("cors")
const PORT = process.env.PORT || 3000;
const app = express();

const { logger } = require("./utils/logger")
const { webhook } = require("./utils/webhook")

//initialize webhook url
const initializeWebhookURL = async() => {
    try {
        let setWebhookUrl = new webhook(process.env.WEBHOOK_URL)
        await setWebhookUrl.setWebhookURL()

    } catch (error) {
        console.log(error)

    }

}
initializeWebhookURL()

//route imports
const { messageRouter } = require("./routes/messages")
const { webhookRouter } = require("./routes/webhook")
const { undefinedRouter } = require("./routes/undefinedRoute")

//middlewares
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
        let payloadSize = req.headers['content-length'];
        console.log(`[Request Payload Size: ${payloadSize}]`)
        console.log(`[time: "${new Date().toISOString()}"  method: "${req.method}"   url: "${req.originalUrl}"  payload:"${JSON.stringify(req.body)}"  user-agent: "${req.headers['user-agent']}"  ip: "${req.ip}"]`)
        next()
    }) //logger function

//root route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welecome to oneroute API" })
})

//mount routes to app
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/webhook", webhookRouter)
app.use(undefinedRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));