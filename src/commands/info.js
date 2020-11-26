const Discord = require("discord.js")

module.exports.run = async (client, message, bot) => {
    botFetch = client.users.cache.get('732645141839609958')

    let servers = client.guilds.cache.size;

    let serverembed = new Discord.MessageEmbed()
        .setColor("#9400D3")
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .addField(`Version`, `1.65`, true)
        .addField(`Library`, `Discord.js`, true)
        .addField(`Creator`, `LoneFrosty#9026`, true)
        .addField(`Servers`, `${servers}`, true)
        .addField('Users', `${message.client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)}`, true)
        .addField(`Invite`, `[Invite ATRAR](https://discord.com/oauth2/authorize?client_id=732645141839609958&permissions=8&scope=bot)`, true)
        .setTimestamp()
        .setThumbnail(botFetch.displayAvatarURL())
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(serverembed);

}

module.exports.help = {
    name: "info",
    aliases: ["botinfo"]

}