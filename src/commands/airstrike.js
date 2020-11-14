const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')


    let subreddits = [  
    '',
    '',
    '',
    ''
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to airstrike");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["RIP", "Say GoodBye", "Dead Man"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`WHY....`, `Sad I am nuked now`, `OH NO-`, `Holy shit!!`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user.id === '732645141839609958') return message.channel.send(msgreplies[remsg])
    let selfmsg = [`Dude use it to kill someone else and not yourself :facepalm:`, `Are you ok buddy?`, `This guy nuked him self`]
    let semsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(selfmsg[semsg])

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} AirStriked ${user}\n` + ` ${replies[result]}`) 
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())


    message.channel.send(embed);

}

module.exports.help = {
    name: "airstrike",
    aliases: [""]
}
