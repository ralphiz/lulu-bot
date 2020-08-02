const { Command } = require("discord.js-commando");

module.exports = class KickCommand extends Command {
  constructor(client) {
    super(client, {
      name: "kick",
      group: "mod",
      memberName: "kick",
      description: "Kicks a user from the guild.",
      userPermissions: ["KICK_MEMBERS"],
      clientPermissions: ["KICK_MEMBERS"],
      argsType: "single",
    });
  }
  async run(message, userId) {
    let guild = message.guild;
    let member = guild.members.cache.get(userId);
    member
      .kick("Kicking...")
      .then((m) => console.log("kicked"))
      .catch((err) => console.log(err));
  }
};
