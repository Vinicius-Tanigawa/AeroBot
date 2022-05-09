const {discord, Permissions} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'set-prefix',
    aliases: ["sp"],
    description: "Troca o prefixo do bot neste servidor.",
    UserPerms: ["ADMINISTRATOR"],
    ClientPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    try{
    const newprefix = args[0]
    if(!newprefix) return message.reply('Entre com o novo prefixo')
    if(newprefix.length > 5) return message.channel.send("Prefíxo inválido, muito longo!")
    message.channel.send(`Prefixo convertido para **${newprefix}**`)
    db.set(`prefix_${message.guild.id}`, newprefix);
    } catch (err) {
      const errorEmbed = new MessageEmbed()
      .setTitle("ERRO")
      .setDescription(`${client.emoji.fail} ${err.message}`)
      .setColor("RED")
      .setFooter("Esta mensagem será deletada em 10 segundos!");
      message.channel.send({embeds: [errorEmbed] }).then(e => {
        setTimeout(() => e.delete(), 10000);
      });
    }
  }
}
