
module.exports.run = async (_client, message) => {

    if (message.author.id != "541215388600500235") return message.channel.send(noPermission)
        const msg = await message.channel.send("*Restarting in 5 seconds, the bot may take a while to restart...*");
        setTimeout(() => {
            msg.delete()
            .then(this.client.destroy())
            .then(newClient.start());
        }, 5000);



const noPermission = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(':x: You don\'t have permission to use this!')
    .setTimestamp()
    .setColor("RANDOM")
    
    message.channel.send(noPermission);
}

module.exports.help = {
    name: "restart",
    aliases: ["r"]
}