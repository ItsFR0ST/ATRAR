const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    let subreddits = [  
    'https://cdn.weeb.sh/images/B1yv36_PZ.gif',
    'https://cdn.weeb.sh/images/rypMnpuvW.gif',
    'https://cdn.weeb.sh/images/Bkk_hpdv-.gif',
    'https://cdn.weeb.sh/images/Sksk4l51z.gif',
    'https://cdn.weeb.sh/images/HJ8dQRYK-.gif',
    'https://cdn.weeb.sh/images/SJ8I2Tuv-.gif',
    'https://cdn.weeb.sh/images/S1-KXsh0b.gif',
    'https://cdn.weeb.sh/images/ry-r3TuD-.gif',
    'https://cdn.weeb.sh/images/r10UnpOPZ.gif'
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to kiss");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["Cute", "OWO", ":eyes:"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`:eyes:`, `Are you fucking serious!`, `You Gay!! :rainbow_flag:`,`What the fuck`];
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(msgreplies[remsg])
    if (user.id === '732645141839609958') return message.reply('Do you know that I am a bot?')

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} kissed ${user},` + ` ${replies[result]}`) 
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "kiss",
    aliases: [""]
}
