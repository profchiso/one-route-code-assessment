require("dotenv").config()
const express = require("express");
const cors = require("cors")
const PORT = process.env.PORT || 3000;
const app = express();

const { logger } = require("./utils/logger")

//route imports
const { messageRouter } = require("./routes/messages")
const { webhookRouter } = require("./routes/webhook")
const { undefinedRouter } = require("./routes/undefinedRoute")

//middlewares
app.use(express.json());
app.use(cors());
app.use(logger(req, res, next)) //logger function

//root route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welecome to oneroute API" })
})

//mount routes to app
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/webhook", webhookRouter)
app.use(undefinedRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));