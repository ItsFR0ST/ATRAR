const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')


    let subreddits = [
        'https://cdn.weeb.sh/images/ryLKqTVCW.gif',
        'https://cdn.weeb.sh/images/rJavp1KVM.gif',
        'https://cdn.weeb.sh/images/ryXj1JKDb.gif',
        'https://cdn.weeb.sh/images/SkksgsnCW.gif'
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to pat");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["You patted him a nice pat.", "Pat Pat.", "There There"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`Thx.`, `Give me more pats please!`, `Pat for me YAY!`, `UWU`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user.id === '732645141839609958') return message.channel.send(msgreplies[remsg])
    let selfmsg = [`Bro, what you doing?`, `**Weird**`, `TF are you doing!`]
    let semsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(selfmsg[semsg])

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author.username} is patting ${user}\n` + `${replies[result]}`)
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())


    message.channel.send(embed);

}

module.exports.help = {
    name: "pat",
    aliases: [""]
}
