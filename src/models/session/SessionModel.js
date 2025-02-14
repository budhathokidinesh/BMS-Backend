import SessionSchema from "./SessionSchema.js";

//insert new session
export const createNewSession = (sessionObj) => {
  return SessionSchema(sessionObj).save();
};
//this is for deleting the session data after getting sessionId and token
export const deleteSession = (filter) => {
  return SessionSchema.findOneAndDelete(filter);
};
