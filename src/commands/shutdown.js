
module.exports.run = async (bot, message) => {


    const noPermission = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(':x: You are not the owner of the bot!')
        .setTimestamp()
        .setColor("RANDOM")


    if (message.author.id != "541215388600500235") return message.channel.send(noPermission);
    const msg = await message.channel.send("Shutingdown the bot....");
    setTimeout(() => {
        msg.delete()
            .then(this.client.destroy())
    }, 5000);

}
module.exports.help = {
    name: "shutdown",
    aliases: ["close, sleep"]
}