const { Command } = require("discord.js-commando");
const request = require("node-superfetch");

module.exports = class Friend extends Command {
  constructor(client) {
    super(client, {
      name: "friend",
      group: "doggo",
      memberName: "friend",
      description: "Generates a random doggo.",
      throttling: {
        usages: 4,
        duration: 20,
      },
    });
  }

  async run(msg) {
    try {
      const { body } = await request.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      return msg.say("Meet my friend:", { files: [body.message] });
    } catch (err) {
      return msg.reply(
        `Oh no, an error occurred: \`${err.message}\`. Try again later!`
      );
    }
  }
};
