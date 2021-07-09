const nodemailer = require('nodemailer');

export default async function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'cddcred.business@gmail.com',
      pass: 'CddCredBusiness'
    }
  })

  await transporter.sendMail({
    from: `"Formulário do Site 📑" ${process.env.USERMAIL}`,
    to: process.env.USERMAIL,
    replyTo: req.body.email,
    subject: "Formulário de Contato",
    text: req.body.message,
    html: `<b>Nome:</b> ${req.body.name}<br /><br />
    <b>Telefone:</b> ${req.body.phone}<br /><br />
    <b>E-mail:</b> ${req.body.email}<br /><br />
    <b>Endereço:</b> ${req.body.address}, ${req.body.addressNumber}, ${req.body.city}`,
  }).then((response) => {
    res.send(response)
  })
  .catch((error) => {
    res.send(error)
  })
}