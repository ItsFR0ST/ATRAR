module.exports.run = async (bot, message, args, Discord) => {

    let messageFetch = message.channel.messages.fetch({ around: args[0], limit: 1 })
	if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MANAGE_ROLES")) return message.reply('You don\'t have the permission to use that!')
    	if (!message.guild.me.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])|| !message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply('I don\'t have the permission to do that')

    if (!args[0]) return message.reply('You havn\'t Choose a message via `MessageID` ')


                if (args[0]) {
                    try {
                        messageFetch.then(messages => {
                            let chosenMessage = messages.first()
                            if (!chosenMessage) return
                            chosenMessage.delete()
                            message.delete()
                            message.channel.send('Message Deleted.');
                        })
                    } catch (err) {
                        message.channel.send(`Please specify a valid message ID to delete`)
                    }
                
            }
}
    
module.exports.help = {
    name: 'destroy',
    aliases: ['erase', 'delete', 'annihilate', 'obliterate', 'eradicate']
}