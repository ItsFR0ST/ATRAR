const Discord = require('discord.js');

module.exports.run = async (_client, message, args) => {

	let userHighestRole = user.roles.highest
	let authorHighestRole = message.member.roles.highest
	let botHighestRole = botFetch.roles.highest
	
	if (userHighestRole.comparePositionTo(authorHighestRole) > 0) return message.channel.send('You can\'t kick this member due to roleHierarchy.')
	if (userHighestRole.equals(authorHighestRole)) return message.channel.send('You can\'t kick this member due to roleHierarchy')
	if (userHighestRole.comparePositionTo(botHighestRole) > 0) return message.channel.send('You can\'t kick this bot due to role roleHierarchy')
	if (userHighestRole.equals(botHighestRole)) return message.channel.send('You can\'t kick this bot due to role roleHierarchy')
    if (user.bot) return message.reply('You can\'t mute bots!')
	if (!message.member.hasPermission('MANAGE_ROLES') || !message.member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS"]) || !message.guild.owner) return message.reply("You don't have the premission to do that!");
	if (!message.guild.me.hasPermission(["MANAGE_MESSAGE", "ADMINISTRATOR"])) return message.reply("I don\'t have permission to change Roles\n Give me the premission to manage roles");
	let toMute = message.mentions.members.first() || message.guild.members.cache.get(args[0])
	if(!toMute) return message.reply("Choose a user to be muted!");
	let reason = args.slice(1).join(" ");
	if(!reason) reason = "No reason given";
	let muteRole = message.guild.roles.cache.find(r => r.name === "Muted");
	if(!muteRole) {
		try {
			muteRole = await message.guild.roles.create({
				data: {
					name: "Muted",
					color: "#514f48",
					permissions: []
				}
			});
		} catch (e) {
			console.log(e.stack);
		}
	}
	message.guild.channels.cache.forEach((channel) => {
		channel.updateOverwrite(muteRole, {
			"SEND_MESSAGES": false,
			"ATTACH_FILES": false,
			"SEND_TTS_MESSAGES": false,
			"ADD_REACTIONS": false,
			"SPEAK": false,
			"STREAM": false
		});
	});
	const muteConfirm = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setDescription(`✅ ${toMute.user} has been successfully muted! \n Reason: ${reason}`);
	toMute.roles.add(muteRole.id).then(() => {
		message.delete()
		toMute.send(`You have been muted by ${message.author}\n for: ${reason}`)
		message.channel.send(muteConfirm)
	});
}



module.exports.help = {
	name: "mute",
	aliases: ["tempmute"]
}