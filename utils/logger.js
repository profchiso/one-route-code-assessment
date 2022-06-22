exports.logger = (req, res, next) => {
    let payloadSize = req.headers['content-length'];
    console.log(`[Request Payload Size: ${payloadSize}]`)
    console.log(`[time: "${new Date().toISOString()}"  method: "${req.method}"   url: "${req.originalUrl}"  payload:"${JSON.stringify(req.body)}"  user-agent: "${req.headers['user-agent']}"  ip: "${req.ip}"]`)
    next()

}