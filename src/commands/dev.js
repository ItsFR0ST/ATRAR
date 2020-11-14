module.exports.run = (client, message, args) => {

    const setStatus = message.content.split(' ');

    if (setStatus[1] === 'frost') {
        client.user.setAFK(true);
        message.channel.send(`<@541215388600500235>, ${message.author.username} needs you`);
    }


   else if (setStatus[1] === 'alex') {
        client.user.setAFK(false);
        message.channel.send(`<@514720382779916318>, ${message.author.username} needs you`);
    }
}

module.exports.help = {
    name: "call",
    aliases: [""]
}