const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('776471071443779634')


    let subreddits = [
        'https://cdn.weeb.sh/images/rykRHmB6W.gif',
        'https://cdn.weeb.sh/images/HkEqiExdf.gif',
        'https://cdn.weeb.sh/images/H1zlgRuvZ.gif',
        'https://cdn.weeb.sh/images/H13HS7S6-.gif',
        'https://cdn.weeb.sh/images/H1EJxR_vZ.gif',
        'https://cdn.weeb.sh/images/Bkagl0uvb.gif'
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to lick");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["You licked him <:Crazyeyes:776934319700443137>.", "L-Lick", "Gay Lick"];
    let result = Math.floor((Math.random() * replies.length));
    let msgreplies = [`Gay :rainbow_flag:`, `Fucking Leave me alone!!`, `Lick someone else!`, `Hey Hey!!`]
    let remsg = Math.floor((Math.random() * msgreplies.length));
    if (user.id === '776471071443779634') return message.channel.send(msgreplies[remsg])
    let selfmsg = [`Bro, what are you doing?`, `**Weird**`, `TF are you doing!` `Are you trying to lick your self?`]
    let semsg = Math.floor((Math.random() * msgreplies.length));
    if (user === message.author) return message.channel.send(selfmsg[semsg])

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} is licking ${user}\n` + `${replies[result]}`)
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())


    message.channel.send(embed);

}

module.exports.help = {
    name: "pat",
    aliases: [""]
}
