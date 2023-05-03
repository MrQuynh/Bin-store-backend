const nodemailer = require("nodemailer");

const sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"BSHOP 👻" <tranong600@gmail.com>', // sender address
    to: dataSend.receiverEmail, // list of receivers
    subject: "Thông tin đặt mua sản phẩm", // Subject line

    html: `
        <h3>Xin chào ${dataSend.name}!</h3>
        
        <p>Cảm ơn bạn đã mua hàng tại Bshop</p>
        
        </div>
        <div>
        <p>Mua sắm nhiều hơn tại</p>
        <a href=${dataSend.redirectLink} target="_blank">BShop.com.vn</a>
        </div>

        <div>Xin chân thành cảm ơn!</div>
    `,
  });
};

module.exports = {
  sendSimpleEmail,
};
