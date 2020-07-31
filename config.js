if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  DISCORD: {
    BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  },
};
