const { Command } = require("discord.js-commando");

module.exports = class TreatCommand extends Command {
  constructor(client) {
    super(client, {
      name: "random-workout",
      group: "workout",
      memberName: "workout",
      description: "Generate a random workout.",
      throttling: {
        usages: 1,
        duration: 30,
      },
    });
  }

  async run(msg) {
    const workouts = [
      "60s jumping jacks",
      "40 jumping jacks",
      "40 alt marching glute bridge",
      "15 pike pushups",
      "30 curtsy lunges",
      "90 flutter kicks",
      "20 commandos",
      "25 reverse lunges",
      "15 dolphin pushups",
      "40 alt jackknifes",
      "50 russian twists",
      "20 jump squats",
      "70 plank shoulder taps",
      "8 beast pushups",
      "20 single leg deadlift",
      "30 alt crab toe touches",
      "40 elbow plank hip dips",
      "30 lying glute bridges",
      "60s elbow plank",
      "30 alt cossack squats",
      "80 russian twists",
      "50 mountain climbers",
      "30 supermans",
      "1m elbow side plank hold (each side)",
    ];

    const workout = workouts[Math.floor(Math.random() * workouts.length)];

    msg.say(`Your workout today is ${workout}`);
  }
};
