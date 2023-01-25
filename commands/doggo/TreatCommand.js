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
    const greetings = [
      "Yo dawg. ",
      "OMG. ",
      "AYOOOOO! ",
      "WOOF. ",
      "D'aww. ",
      "Hehehehe. ",
    ];

    const treats = [
      "Banana 🍌",
      "Apple 🍎",
      "Bacon 🥓",
      "Watermelon 🍉",
      "Strawberry 🍓",
      "Pear 🍐",
      "Mango 🥭",
      "Blueberry 🫐",
    ];
    const dogFaces = ["U ´ᴥ` U", "▼(´ᴥ`)▼", "▼・ᴥ・▼", "U・ᴥ・U", "໒( ̿❍ ᴥ ̿❍)ʋ"];

    const greet = greetings[Math.floor(Math.random() * greetings.length)];
    const treat = treats[Math.floor(Math.random() * treats.length)];
    const face = dogFaces[Math.floor(Math.random() * dogFaces.length)];

    msg.say(` 🐶: "${greet} Thanks for the ${treat} ${face}"`);
  }
};
