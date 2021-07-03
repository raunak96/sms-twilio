require("dotenv").config();

const accountSid = process.env.ACC_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendMessage = async () => {
	try {
		const message = await client.messages.create({
			body: "Message sent By me using Twilio package",
			from: "+19492163479",
			to: "+919123824334",
		});
		console.log(message);
	} catch (error) {
		console.log(error);
	}
};

sendMessage();
