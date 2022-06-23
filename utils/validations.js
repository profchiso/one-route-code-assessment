const { body } = require("express-validator")


const connectionValidation = [
    body('url')
    .trim()
    .notEmpty()
    .withMessage('url is required')
    .isURL()
    .withMessage('Not a valid URL')
]
module.exports = { connectionValidation }