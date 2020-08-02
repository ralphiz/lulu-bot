const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class FriendCommand extends Command {
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
    await fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) =>
        msg.say("Here is a random doggo friend:", { files: [data.message] })
      )
      .catch((error) => msg.say(`Uh oh! ${error}`, { code: true }));
  }
};
