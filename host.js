const Eris = require("eris");

// Replace TOKEN with your bot account's token
const bot = new Eris("");

bot.on("error", (err) => {
    console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
