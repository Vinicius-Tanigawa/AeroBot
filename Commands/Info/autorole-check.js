const db = require('quick.db');
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'autorole-check',
    aliases: ["arc"],
    description: "checks current autorole",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        try{
        const check = await db.has(`autorole-${message.guild.id}`);
        if(check === false) return message.reply('Não há autorole programado!');
        const role = await db.get(`autorole-${message.guild.id}`);
        const embed = new MessageEmbed()
        .setTitle('AutoRole')
        .setDescription(`O autorole programado é <@&${role}>`)
        .setColor('RED')
        message.reply({ embeds: [embed] });
        } catch (err) {
            const errorEmbed = new MessageEmbed()
            .setTitle("ERROR")
            .setDescription(`${client.emoji.fail} ${err.message}`)
            .setColor("RED")
            .setFooter("Essa mensagem será deletada em 10 segundos.");
            message.channel.send({embeds: [errorEmbed] }).then(e => {
                setTimeout(() => e.delete(), 10000);
            });
        }
    }
}
