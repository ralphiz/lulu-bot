const { Command } = require("discord.js-commando");

module.exports = class PawCommand extends Command {
  constructor(client) {
    super(client, {
      name: "paw",
      group: "doggo",
      memberName: "paw",
      description: "Chooses one of two choices.",
      argsType: "single",
    });
  }

  async run(message, args) {
    const choices = args.split("|");
    const choice = choices[Math.floor(Math.random() * choices.length)];
    message.say(`🐶: "My paw chooses ${choice}!"`);
  }
};
