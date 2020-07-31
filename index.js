const Discord = require("discord.js");
// TODO: Update the config file to use environment variables.
// TODO: Change config.json to config.js and use `dotenv` module.
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "lulu.";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "fetch") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Got it! This message had a latency of ${timeTaken}ms.`);
  }
});

client.login(config.BOT_TOKEN);
