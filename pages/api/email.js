import nodemailer from "nodemailer";


export default async function handler(req,res){

    const method={
        POST: async ()=>{
            console.log("Lllllllll")
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'tre723123@gmail.com',
                    pass: process.env.EMAIL_PASS,
                },
            });

            const result= await transporter.sendMail({
                from: req.body.email,
                to: 'tre723@naver.com',
                subject: req.body.number,
                text: req.body.contents,
            });

            return res.status(200).send(result);
        }
    }
    if(method[req.method]){
        method[req.method]()
    }
    else{
        return res.status(500).send('error')
    }
}