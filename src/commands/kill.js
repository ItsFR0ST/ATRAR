const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    let subreddits = [  
    'https://cdn.weeb.sh/images/B1VnoJFDZ.gif',
    'https://cdn.weeb.sh/images/r11as1tvZ.gif',
    'https://cdn.weeb.sh/images/BJO2j1Fv-.gif',
    'https://cdn.weeb.sh/images/HyXTiyKw-.gif'

    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to kill");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["OOF", "RIP", "GoodBye..."];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`Lets...not do that, ${message.author.username}...`, `No!`, `Can't we don't do that please.`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(msgreplies[remsg])


    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} killed ${user}\n` + ` ${replies[result]}`) 
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())


    message.channel.send(embed);

}

module.exports.help = {
    name: "kill",
    aliases: [""]
}
