const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('776471071443779634')

    var subreddits = [
        'https://cdn.weeb.sh/images/BkeYw66uvW.jpeg',
        'https://cdn.weeb.sh/images/rJgCSpp_wb.gif',
        'https://cdn.weeb.sh/images/B1n8TpuvW.gif',
        'https://cdn.weeb.sh/images/rke5DTadPb.gif'
    ]


    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["You lewding", "L-Lewd...", "<:Crazyeyes:776934319700443137>"];
    let result = Math.floor((Math.random() * replies.length));


    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} lewds ${user}\n` + replies[result])
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "lewd",
    aliases: [""]
}
