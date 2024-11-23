module.exports.config = {
  name: "shoti",
  version: "1.0.0",
  role: 0,
  hasPrefix: true,
  usage: '[ shoti ]',
  description: 'Generate random TikTok girls',
  credits: 'Deveploper',
  cooldown: 10,
  dependencies: [],
};

module.exports.run = async function ({ api, event }) {
  try {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs");
    let response = await axios.post(
      "https://your-shoti-api.vercel.app/api/v1/get",
      {
        apikey: "shoti-1ha4h3do8at9a7ponr",
      },
    );
    var file = fs.createWriteStream(__dirname + "/cache/shoti.mp4");
    var rqs = request(encodeURI(response.data.data.url));
    rqs.pipe(file);
    file.on("finish", () => {
      return api.sendMessage(
        {
          body: `@${response.data.data.user.username}`,
          attachment: fs.createReadStream(__dirname + "/cache/shoti.mp4"),
        },
        event.threadID,
        event.messageID,
      );
    });
    file.on("error", (err) => {
      api.sendMessage(`Shoti Error: ${err}`, event.threadID, event.messageID);
    });
  } catch (error) {
    api.sendMessage(
      "An error occurred while generating video:" + error,
      event.threadID,
      event.messageID,
    );
  }
};
