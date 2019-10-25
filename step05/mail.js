const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '1431290168@qq.com', // generated ethereal user
        pass: 'rfxqtqjoiarkfdjj' // generated ethereal password
    }
})

let sendObj = {
    from: '1431290168@qq.com', // sender address
    to: '1431290168@qq.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
}

transporter.sendMail(sendObj, (err, data) => {
    console.log(err)
    console.log(data)
})
