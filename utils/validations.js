const { body } = require("express-validator")


const connectionValidation = [
    body('url')
    .trim()
    .notEmpty()
    .withMessage('url is required')
    .isURL()
    .withMessage('Not a valid URL')
]
const sendMessage = [
    body("recipient_type")
    .trim()
    .notEmpty()
    .withMessage("recipient_type is required"),
    body("to")
    .trim()
    .notEmpty()
    .withMessage("to field is required"),
    body("type")
    .trim()
    .notEmpty()
    .withMessage("type field is require"),
    body("text")
    .notEmpty()
    .withMessage("text field is required")

]
module.exports = { connectionValidation, sendMessage }