const nodemailer = require('nodemailer');

exports.handleContactForm = async (req, res) =>{
    const {name, email, message} = req.body;

    if(!name || !email || !message){
        return res.status(400).json({
            error: 'All fields are required'
        });
    }

    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
            debug: true,
            logger: true, 
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `portfolio Contact form: ${name}`,
            text:`You have a new message from your portfolio contact form:
            name: ${name}
            email: ${email}
            Message:${message}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: 'message sent successfully!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'failed to send message. try again later.'
        });
    }
};