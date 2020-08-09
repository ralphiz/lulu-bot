const { Command } = require("discord.js-commando");

module.exports = class PawCommand extends Command {
  constructor(client) {
    super(client, {
      name: "paw",
      group: "doggo",
      memberName: "paw",
      description:
        "Chooses one from a collection of choices. Each choice must be separated by a `,` or `|`. Example: `l.paw treat, walk, nap`",
      argsType: "single",
    });
  }

  async run(message, args) {
    const choices = args.split(/,|\|/gm);
    const choice = choices[Math.floor(Math.random() * choices.length)];
    message.say(`🐶: "My paw chooses: ${choice.trim()}!"`);
  }
};
