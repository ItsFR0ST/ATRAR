
module.exports.run = async (client, message) => {


    if (message.author.id != "541215388600500235") return message.channel.send(':x: You are not the owner of the bot');
        const msg = await message.channel.send("*Restarting in 5 seconds, the bot may take a while to restart...*");
        setTimeout(() => {
            msg.delete()
            .then(this.client.destroy())
            .then(newClient.start());
        }, 5000);




}

module.exports.help = {
    name: "restart",
    aliases: ["r"]
}