const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('776471071443779634')

    var subreddits = [
        'https://cdn.weeb.sh/images/SyLfyJtvb.gif',
        'https://cdn.weeb.sh/images/HJ_RAAuvb.gif',
        'https://cdn.weeb.sh/images/HJIryktPZ.gif',
        'https://cdn.weeb.sh/images/rynfK0DTW.gif'
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["Nom", "NOM NOM"];
    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(replies[result])
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "nom",
    aliases: [""]
}
