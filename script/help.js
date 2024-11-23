module.exports.config = {
  name: 'help',
  version: '1.0.0',
  role: 0,
  hasPrefix: true,
  aliases: ['info'],
  description: "Beginner's guide",
  usage: "Help [page] or [command]",
  credits: 'Develeoper',
};
module.exports.run = async function({
  api,
  event,
  enableCommands,
  args,
  Utils,
  prefix
}) {
  const input = args.join(' ');
  try {
    const eventCommands = enableCommands[1].handleEvent;
    const commands = enableCommands[0].commands;
    if (!input) {
      const pages = 20;
      let time = process.uptime();
      let hours = Math.floor(time / (60 * 60));
      let minutes = Math.floor((time % (60 * 60)) / 60);
      let seconds = Math.floor(time % 60);
      const hoursString = hours === 1 ? "hour" : "hours";
      const minutesString = minutes === 1 ? "minute" : "minutes";
      const secondsString = seconds === 1 ? "second" : "seconds";

      const uptimeString = `${hours > 0 ? `${hours}` : ''} : ${minutes > 0 ? `${minutes}` : ''} : ${seconds}`;
      let page = 1;
      let start = (page - 1) * pages;
      let end = start + pages;
      let helpMessage = `AVAILABLE COMMANDS:\n\n`;
      for (let i = start; i < Math.min(end, commands.length); i++) {
        helpMessage += `${i + 1}. ${commands[i]}\n`;
      }
      helpMessage += '\nAVAILABLE EVENTS:\n\n';
      eventCommands.forEach((eventCommand, index) => {
        helpMessage += `${index + 1}. ${eventCommand}\n`;
      });
      helpMessage += `\nServer runtime: ${uptimeString}\nPage ${page}/${Math.ceil(commands.length - pages)}. To access the next page, use help 2\nTo view information about a specific command, type "${prefix}help command name"`;
      api.sendMessage(helpMessage, event.threadID, event.messageID);
    } else if (!isNaN(input)) {
      const page = parseInt(input);
      const pages = 20;
      let time = process.uptime();
      let hours = Math.floor(time / (60 * 60));
      let minutes = Math.floor((time % (60 * 60)) / 60);
      let seconds = Math.floor(time % 60);
      const hoursString = hours === 1 ? "hour" : "hours";
      const minutesString = minutes === 1 ? "minute" : "minutes";
      const secondsString = seconds === 1 ? "second" : "seconds";

      const uptimeString = `${hours > 0 ? `${hours}` : ''} : ${minutes > 0 ? `${minutes}` : ''} : ${seconds}`;
      let start = (page - 1) * pages;
      let end = start + pages;
      let helpMessage = `AVAILABLE COMMANDS:\n\n`;
      for (let i = start; i < Math.min(end, commands.length); i++) {
        helpMessage += `${i + 1}. ${commands[i]}\n`;
      }
      helpMessage += '\nAVAILABLE EVENTS:\n\n';
      eventCommands.forEach((eventCommand, index) => {
        helpMessage += `${index + 1}. ${eventCommand}\n`;
      });
      helpMessage += `\nServer runtime: ${uptimeString}\nPage ${page} of ${Math.ceil(commands.length / pages)}`;
      api.sendMessage(helpMessage, event.threadID, event.messageID);
    } else {
      const command = [...Utils.handleEvent, ...Utils.commands].find(([key]) => key.includes(input?.toLowerCase()))?.[1];
      if (command) {
        const {
          name,
          version,
          role,
          aliases = [],
          description,
          usage,
          credits,
          cooldown,
          hasPrefix
        } = command;
        const roleMessage = role !== undefined ? (role === 0 ? '❯ permission: user' : (role === 1 ? '❯ permission: admin' : (role === 2 ? '❯ permission: thread Admin' : (role === 3 ? '❯ permission: super Admin' : '')))) : '';
        const aliasesMessage = aliases.length ? `❯ aliases: ${aliases.join(', ')}\n` : '';
        const descriptionMessage = description ? `${description}\n` : '';
        const usageMessage = usage ? `❯ usage: ${usage}\n` : '';
        const creditsMessage = credits ? `❯ credits: ${credits}\n` : '';
        const versionMessage = version ? `❯ version: ${version}\n` : '';
        const cooldownMessage = cooldown ? `❯ cooldown: ${cooldown} second(s)\n` : '';
        const message = ` 「 ${name} 」\n${descriptionMessage}\n${versionMessage}${roleMessage}\n${aliasesMessage}${usageMessage}${creditsMessage}${cooldownMessage}`;
        api.sendMessage(message, event.threadID, event.messageID);
      } else {
        api.sendMessage('Command not found.', event.threadID, event.messageID);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.handleEvent = async function({
  api,
  event,
  prefix
}) {
  const {
    threadID,
    messageID,
    body
  } = event;
  const message = prefix ? 'This is my prefix: ' + prefix : "Sorry i don't have prefix";
  if (body?.toLowerCase().startsWith('prefix')) {
    api.sendMessage(message, threadID, messageID);
  }
}
