const Discord = require("discord.js");
const config = require("./config.js");

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
    message.reply(
      `Got it! :dog: :tennis: It took me ${timeTaken}ms to fetch the ball!`
    );
  }
});

client.login(config.DISCORD.BOT_TOKEN);
