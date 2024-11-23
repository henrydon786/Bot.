const axios = require("axios");
module.exports.config = {
  'name': "tempmail",
  'version': "1.0.0",
  role: 0,
  hasPrefix: true,
  usage: '[tempmail]',
  description: 'Generte tempmail',
  credits: 'Shahzaib Khanzada',
  cooldown: 0
};
module.exports.run = async ({
  api: _0x4f7d80,
  event: _0x249b88
}) => {
  try {
    const _0x5655ec = await axios.get('https://scp-09.onrender.com/api/gen');
    const _0x2f1c89 = _0x5655ec.data;
    if (!_0x2f1c89.email) {
      return _0x4f7d80.sendMessage("Failed to generate temporary email.", _0x249b88.threadID);
    }
    _0x4f7d80.sendMessage("🏷️ email : " + _0x2f1c89.email + "", _0x249b88.threadID);
  } catch (_0x16f012) {
    console.error("Error generating temporary email:", _0x16f012);
    _0x4f7d80.sendMessage("An error occurred while generating temporary email.", _0x249b88.threadID);
  }
};
