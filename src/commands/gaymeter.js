const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('776471071443779634')

    let replies = [
        '60%',
        '10%',
        '0% **Weird?**',
        '5%',
        '15%',
        '100% **Confirmed** :rainbow_flag:',
        '95%',
        '50%',
        '36%',
        '43%',
        '20%',
        '70%',
        '75%',
        '55%',
        '85%',
        '80%',
        '2%',
        '1%'
    ];
    let result = Math.floor((Math.random() * replies.length));
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const gaymeter = new Discord.MessageEmbed()
        .setTitle('Gay Meter :rainbow_flag:')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#008000')
        .setDescription(`Your Gay Rate is: ` + replies[result])
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
        if (!user) return message.channel.send(gaymeter)

const gaymeter2 = new Discord.MessageEmbed()
     .setTitle('Gay Meter :rainbow_flag:')
     .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
     .setColor('#008000')
     .setDescription(`${user}\'s Gay Rate is: ` + replies[result])
     .setTimestamp()
     .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
    if (user) return message.reply(gaymeter2);

}
module.exports.help = {
    name: "gaymeter",
    aliases: ["gm", "gae"]
}