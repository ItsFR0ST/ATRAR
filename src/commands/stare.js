const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('776471071443779634')

    var sub = [
        'https://cdn.weeb.sh/images/Sk5BOdQIG.gif',
        'https://cdn.weeb.sh/images/BknO81Kwb.gif',
        'https://cdn.weeb.sh/images/HJ6qUytDb.gif',
        'https://cdn.weeb.sh/images/HyHdUJYwW.gif',
        'https://cdn.weeb.sh/images/SkH3Uytwb.gif',
        'https://cdn.weeb.sh/images/Hk22hAo9M.gif'
    ]


    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["Starring....", "<:Crazyeyes:776934319700443137>"];
    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} is starring\n` + replies[result])
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "stare",
    aliases: [""]
}
