import twilio from "twilio";

const accountSid = "ACdb39b7fae6bbxxxxxxxxxxxxxxxx";
const authToken = "2a12619aee6c0xxxxxxxxxxxxxxxxxx";

const number = process.argv[2];
const mensaje = process.argv[3];

const client = twilio(accountSid, authToken);

try {
  const message = await client.messages.create({
    body: mensaje,
    from: "+18xxxxxxx",
    to: number,
  });
  console.log(message);
} catch (error) {
  console.log(error);
}
