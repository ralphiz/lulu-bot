const { Command } = require("discord.js-commando");

module.exports = class TreatCommand extends Command {
  constructor(client) {
    super(client, {
      name: "treat",
      group: "doggo",
      memberName: "treat",
      description: "Gives Lulu a random treat.",
      throttling: {
        usages: 2,
        duration: 30,
      },
    });
  }

  async run(msg) {
    const treats = ["🍌", "🍎", "🥓", "🍉", "🍓", "🍐", "🥭"];
    const treat = treats[Math.floor(Math.random() * treats.length)];
    msg.say(` 🐶: Thanks for the ${treat} ٩(◕‿◕｡)۶`);
  }
};
