const axios = require('axios');

module.exports.config = {
  name: "inbox",
  version: "1.0.0",
  role: 0,
  hasPrefix: true,
  usage: '[tempmail]',
  description: 'fetch and display message only for tempmail',
  credits: 'Jazer Dmetriov',
  cooldown: 2
};

module.exports.run = async ({ api, event, args }) => {
  try {
    const emailAddress = args[0];
    const inboxResponse = await axios.get(`https://scp-09.onrender.com/api/getmessage/${emailAddress}`);
    const messages = inboxResponse.data.messages;

    if (!messages || messages.length === 0) {
      return api.sendMessage(`No messages found for ${emailAddress}.`, event.threadID);
}
    let messageText = `Inbox Messages for: ${emailAddress}`;
    for (const message of messages) {
      messageText += `\n\n₪. From: ${message.sender}\n`;
      messageText += ` Subject: ${message.subject || 'NO SUB'}\n  Date: ${message.date}\n  Id: ${message.id}\nOwner: https://www.facebook.com/1753855074`;
    }

    api.sendMessage(messageText, event.threadID);
  } catch (error) {
    console.error('Error fetching inbox:', error);
    api.sendMessage("An error occurred while fetching the inbox, please try again.", event.threadID);
  }
};
