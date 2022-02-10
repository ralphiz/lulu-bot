const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class CatCommand extends Command {
  constructor(client) {
    super(client, {
      aliases: ["neko"],
      name: "cat",
      group: "neko",
      memberName: "cat",
      description: "Generates a random neko.",
      throttling: {
        usages: 4,
        duration: 20,
      },
    });
  }

  async run(msg) {
    await fetch("https://api.thecatapi.com/v1/images/search", {
      limit: 1,
      size: "full",
    })
      .then((response) => response.json())
      .then((data) =>
        msg.say(`"🐶 Here is a random neko friend:"`, {
          files: [data[0].url],
        })
      )
      .catch((error) => {
        console.log(error);
        return msg.say(`Uh oh! ${error}`, { code: true });
      });
  }
};
