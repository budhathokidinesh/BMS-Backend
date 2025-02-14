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
