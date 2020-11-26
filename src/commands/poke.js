const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    var subreddits = [
        'https://cdn.weeb.sh/images/HkxwlkKPb.gif',
        'https://cdn.weeb.sh/images/rktSlkKvb.gif',
        'https://cdn.weeb.sh/images/SydLxJFwW.gif',
        'https://cdn.weeb.sh/images/rkB8eJYPZ.gif',
        'https://cdn.weeb.sh/images/rJ0hlsnR-.gif',
        'https://cdn.weeb.sh/images/SyJzRTKFW.gif'
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to poke");
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["P-Poke...", "Poke Poke Poke!", "Let's Poke!"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`UWU`, `Ok`, `Do it with someone else.`, `Don't Poke me`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user.id === '732645141839609958') return message.channel.send(msgreplies[remsg])
    let selfmsg = [`Why you choosed to poke yourself?`, `Poke someone else man.`, `UMMM`, `Very Weird`]
    let semsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(selfmsg[semsg])

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} is poking ${user}\n` + replies[result])
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "poke",
    aliases: [""]
}
