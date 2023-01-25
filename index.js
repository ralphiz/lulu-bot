require("dotenv").config();
const path = require("path");

const { DISCORD_BOT_TOKEN, OWNER } = process.env;

const { CommandoClient } = require("discord.js-commando");

const PREFIX = "l.";

const client = new CommandoClient({
  commandPrefix: PREFIX,
  owner: OWNER,
});

client.login(DISCORD_BOT_TOKEN);

client.on("ready", () => {
  console.log("Lulu bot logged in!");
});

client.registry
  .registerGroups([
    ["doggo", "Doggo commands"],
    ["mod", "Mod commands"],
    ["neko", "Neko commands"],
    ["other", "Other commands"],
    ["workout", "Workout commands"],
  ])
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, "commands"));
