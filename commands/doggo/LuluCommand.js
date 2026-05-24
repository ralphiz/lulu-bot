const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class LuluCommand extends Command {
  constructor(client) {
    super(client, {
      name: "lulu",
      group: "doggo",
      memberName: "lulu",
      description: "In memory of Lulu. 🤍",
    });
  }

  async run(msg) {
    const embed = new MessageEmbed()
      .setTitle("Lulu 🤍")
      .setDescription(
        "January 28, 2014 – May 9, 2026\n\nWe love and miss you, Lulu."
      )
      .setImage(
        "https://raw.githubusercontent.com/ralphiz/lulu-bot/master/images/lulu.png"
      )
      .setColor("#FFFFFF");

    msg.embed(embed);
  }
};
