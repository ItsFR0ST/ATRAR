const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('776471071443779634')

    var subreddits = [
        'https://cdn.weeb.sh/images/HkYzKyXjW.gif',
        'https://cdn.weeb.sh/images/BJnxKJXsZ.gif',
        'https://cdn.weeb.sh/images/B1-7KkQsZ.gif',
        'https://cdn.weeb.sh/images/B1-7KkQsZ.gif',
        'https://cdn.weeb.sh/images/S1kKq1XiZ.gif'
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to highfive");
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["It's HighFive time", "High5 <:Crazyeyes:776934319700443137>"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`UWU`, `Ok`, `Thx`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user.id === '776471071443779634') return message.channel.send(msgreplies[remsg])
    let selfmsg = [`Ummmmm...`, `You don't have to do that.`, `Don't use it on yourself!`]
    let semsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(selfmsg[semsg])

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} highfived ${user}\n` + replies[result])
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "highfive",
    aliases: ["high5"]
}
