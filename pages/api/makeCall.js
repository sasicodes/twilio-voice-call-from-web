const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

export default function handler(req, res) {
  const { dialTo } = req.query;
  client.calls
    .create({
      twiml:
        "<Response><Say>Hello there! Visit github.com slash sasidharan k for source code.</Say></Response>",
      to: dialTo,
      from: phoneNumber,
    })
    .then((call) => {
      console.log(call);
      return res.send({ ok: true, call });
    });
}
