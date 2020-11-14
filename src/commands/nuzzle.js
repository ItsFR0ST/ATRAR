const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('776471071443779634')

    var subreddits = [
        'https://i.imgur.com/r8BRNYz.gif',
        'https://i.imgur.com/KrYnQzR.gif',
        'https://i.imgur.com/DScGTM6.gif',
        'https://i.imgur.com/UP9CmgY.gif',
        'https://i.imgur.com/9uHap1W.gif',
        'https://i.imgur.com/EVBa1rR.gif'

    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to nuzzle");
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["Nuzzling!", "That seems good", "This guy is nuzzling <:Crazyeyes:776934319700443137>"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`UWU`, `Ok`, `Do it with someone else.`, `Don't Poke me`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user.id === '776471071443779634') return message.channel.send(msgreplies[remsg])
    let selfmsg = [`Why you choosed to nuzzle yourself?!`, `Man you should nuzzle someone.`, `UMMM`, `Very Weird`]
    let semsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(selfmsg[semsg])

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} is nuzzling ${user}\n` + replies[result])
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "nuzzle",
    aliases: [""]
}
