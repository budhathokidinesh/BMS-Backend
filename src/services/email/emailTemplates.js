//this email templete is attached with the activation link to activate the user
export const userActivationUrlEmailTemplete = ({ email, name, url }) => {
  return {
    from: `"Local book shop 👻" <${process.env.SMTP_EMAIL}>`, // sender address
    to: email, // list of receivers
    subject: "Action required - Activate your account✔", // Subject line
    text: `Hellow ${name} follow the link to activate your account ${url}`, // plain text body
    html: `
    <p>Hellow ${name}</p>
    <br />
<br />
<br />
<p>Your account has been created. Click the button below to activate your account.</p>
<br />
<br />
<a href = ${url}
<button style = "background:green; color: white; padding: 2rem ">Activate now</button>
</a>
<br />
<br />
<br />
<br />
Regards
Dinesh Budhathoki
    `, // html body
  };
};
//this email templete to send notification to the user your account has been activated
export const userActivatedNotificationTemplete = ({ email, name, url }) => {
  return {
    from: `"Local book shop 👻" <${process.env.SMTP_EMAIL}>`, // sender address
    to: email, // list of receivers
    subject: "Your account is active", // Subject line
    text: `Hellow ${name}, Your account has been activated. You may sign in now.`, // plain text body
    html: `
    <p>Hellow ${name}</p>
    <br />
<br />
<br />
<p>Your account has been activated. You may sign in now.</p>
<br />
<br />

<br />
<br />
<br />
<br />
Regards
Dinesh Budhathoki
    `, // html body
  };
};
//this email templete is to send OTP for the user
export const passwordResetOTPSendTemplete = ({ email, name, otp }) => {
  return {
    from: `"Local book shop 👻" <${process.env.SMTP_EMAIL}>`, // sender address
    to: email, // list of receivers
    subject: "Your OTP to reset tha password", // Subject line
    text: `Dear ${name}, Here is your OTP to reset your password ${otp}. This otp will expire in 5 minuts. Thanks`, // plain text body
    // html body
    html: `
    <p>Dear ${name}</p>
    <br />
<br />
<br />
<p>Here is your OTP to reset your password ${otp}. This otp will expire in 5 minuts. Thanks</p>
<br />
<br />

<br />
<br />
<br />
<br />
Regards
Dinesh Budhathoki
    `,
  };
};
//this is for notification after successfully updating the password
export const userProfileUpdatedNotificationTemplete = ({
  email,
  name,
  otp,
}) => {
  return {
    from: `"Local book shop 👻" <${process.env.SMTP_EMAIL}>`, // sender address
    to: email, // list of receivers
    subject: "Your account has been updated", // Subject line
    text: `Dear ${name}, Your account has been just updated. If this was not you please change your password. Thanks`, // plain text body
    // html body
    html: `
    <p>Dear ${name}</p>
    <br />
<br />
<br />
<p>Your account has been just updated. If this was not you please change your password. Thanks</p>
<br />
<br />

<br />
<br />
<br />
<br />
Regards
Dinesh Budhathoki
    `,
  };
};
