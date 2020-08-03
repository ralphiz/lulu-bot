const { Command } = require("discord.js-commando");

module.exports = class FetchCommand extends Command {
  constructor(client) {
    super(client, {
      name: "fetch",
      group: "doggo",
      memberName: "fetch",
      description: "Similar to ping but with different text.",
      throttling: {
        usages: 4,
        duration: 20,
      },
    });
  }

  async run(msg) {
    const timeTaken = Date.now() - msg.createdTimestamp;
    msg.say(
      `🐶: "Got it! :tennis: It took me ${timeTaken}ms to fetch the ball!"`
    );
  }
};
