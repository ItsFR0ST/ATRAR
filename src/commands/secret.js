const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')


const embed = new Discord.MessageEmbed()
   .setTitle("Congrats")
   .setTimestamp()
   .setColor("RANDOM")
   .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
   .addField('Congrats', `You found the hidden commands dm the owner with screen shot and for a surprise`)
   .setDescription(`reload shutdown restart`)

message.channel.send(embed);

}



module.exports.help = {
    name: "boc",
    aliases: ["secretcommands"]
}

