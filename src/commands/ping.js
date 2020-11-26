const Discord = require("discord.js");

module.exports.run = async (client, message, bot) => {
    botFetch = client.users.cache.get('732645141839609958')
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    message.channel.send("Getting bot Stats").then(m => {
    var ping = m.createdTimestamp - message.createdTimestamp

    var embed = new Discord.MessageEmbed()
        .setTitle('Bot Stats')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`The bot ping is: ${ping}\n I have been online for: ${uptime}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
    m.edit(embed)
});
message.delete();
        
        }
module.exports.help = {
    name: "ping",
    aliases: ["uptime", "botstats", "serverstats"]
}

