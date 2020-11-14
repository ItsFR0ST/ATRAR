const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {


	let userHighestRole = user.roles.highest
	let authorHighestRole = message.member.roles.highest
	let botHighestRole = botFetch.roles.highest
	let mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])


	if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You don\'t have the permission to use that!')
	if (!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"]) || !message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the permission to do that, Please give me __**Kick Members**__ permission.')
	if (user.id == '761179158176071691') return message.channel.send('You can\'t kick me!')
	if (!user) return message.channel.send('You hav\'t choose a member to kick.')
	if (user.bot) return message.channel.send('You Can\'t kick bots!')
	if (user.id == message.author.id) return message.channel.send('You can\'t kick yourself!')
	if (user.id == '541215388600500235') return message.channel.send('You can\'t kick my creator!!')
	if (userHighestRole.comparePositionTo(authorHighestRole) > 0) return message.channel.send('You can\'t kick this member due to roleHierarchy.')
	if (userHighestRole.equals(authorHighestRole)) return message.channel.send('You can\'t kick this member due to roleHierarchy')
	if (userHighestRole.comparePositionTo(botHighestRole) > 0) return message.channel.send('You can\'t kick this bot due to role roleHierarchy')
	if (userHighestRole.equals(botHighestRole)) return message.channel.send('You can\'t kick this bot due to role roleHierarchy')
	if (!kickReason) kickReason = "No reason given";
	message.guild.members.kick(user, { reason: kickReason });


	const kickConfirm = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTimestamp()
	.setDescription(`✅ ${mentionMember} has been successfully kicked! Reason: __${kickReason}__`)
	.setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

	message.channel.send(kickConfirm);

	const dmkicked = new Discord.MessageEmbed()
	.setColor("RANDOM")
	.setTimestamp()
	.setDescription(`✅ You have been kicked from \`${message.guild.name}\``)
	.addField('Kicked by', message.author)
	.addField('Reason:', kickReason)
	user.send(dmkicked)
	

}

module.exports.help = {
	name: "kick",
	aliases: ["Kick"]
}