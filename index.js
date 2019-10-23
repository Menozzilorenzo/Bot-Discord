const Discord = require('discord.js');
const client = new Discord.Client();
const url = "https://www.youtube.com/watch?v=voQhp1K2TSk";

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
} else if(message.content.startsWith("maestro")){
    message.channel.send(url);
}
});

client.login("NjAyMjAzMzUzNjEwNzE1MTU2.XTNhMA.jRb35ZZPpKIj7vNANlURZysA4D4"); // token de la page "discordapp.com/developers/applications/..../bots"