import {
  passwordResetOTPSendTemplete,
  userActivatedNotificationTemplete,
  userActivationUrlEmailTemplete,
  userProfileUpdatedNotificationTemplete,
} from "./emailTemplates.js";
import { emailTransporter } from "./transport.js";

//this is for the link to activation
export const userActivationUrlEmail = async (obj) => {
  const transport = emailTransporter();
  const info = await transport.sendMail(userActivationUrlEmailTemplete(obj));

  return info.messageId;
};

//this is for the notification of account has been activated
export const userActivatedNotificationEmail = async (obj) => {
  const transport = emailTransporter();
  const info = await transport.sendMail(userActivatedNotificationTemplete(obj));

  return info.messageId;
};
// this is for the sending OTP for forgot password
export const passwordResetOTPNOtificationEmail = async (obj) => {
  const transport = emailTransporter();
  const info = await transport.sendMail(passwordResetOTPSendTemplete(obj));

  return info.messageId;
};
// this is for the sending notification for the account has been updated
export const userProfileUpdatedNotificationEmail = async (obj) => {
  const transport = emailTransporter();
  const info = await transport.sendMail(
    userProfileUpdatedNotificationTemplete(obj)
  );

  return info.messageId;
};
