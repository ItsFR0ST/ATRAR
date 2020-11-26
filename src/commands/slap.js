const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    let subreddits = [  
    'https://cdn.weeb.sh/images/B1oCmkFw-.gif',
    'https://cdn.weeb.sh/images/SJL3Q1Fvb.gif',
    'https://cdn.weeb.sh/images/SJlkNkFwb.gif',
    'https://cdn.weeb.sh/images/r1siXJKw-.gif',
    'https://cdn.weeb.sh/images/BJLCX1Kw-.gif',
    'https://cdn.weeb.sh/images/r1lxO_QIf.gif',
    'https://cdn.weeb.sh/images/rJ52XyYD-.gif',
    'https://cdn.weeb.sh/images/HJfXM0KYZ.gif',
    'https://cdn.weeb.sh/images/BkzyEktv-.gif',
    'https://cdn.weeb.sh/images/B1fnQyKDW.gif',
    'https://cdn.weeb.sh/images/Hy09QJFDZ.gif'
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to slap");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["Deserves it!", "OOF", "Ouch!"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`No not me!!`, `You such a bi***`, `Why me?`, `Are you fucking kidding me! there's too many members here and you used that on me!`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user.id === '732645141839609958') return message.channel.send(msgreplies[remsg])
    let selfmsg = [`stop slapping yourself!`, `**Very Weird**`, `TF are you doing!`]
    let semsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(selfmsg[semsg])


    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} slapped ${user},` + ` ${replies[result]}`) 
        .setImage(sub)
        .setFooter(`Version 1.65`, botFetch.displayAvatarURL());

    message.channel.send(embed);

}

module.exports.help = {
    name: "slap",
    aliases: [""]
}
