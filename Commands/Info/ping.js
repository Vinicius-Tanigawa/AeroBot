const { MessageEmbed } = require('discord.js');
module.exports = {
      name: 'ping',
      usage: 'ping',
      description: "Mostra a latência atual do AeroBot e API.",
      run: async(client, message, prefix) => {
        if(!message.content.startsWith(prefix)) return;
              try {
              const embed = new MessageEmbed()
              .setDescription('`Pinging...`')
              .setColor("RANDOM");    
              const msg = await message.channel.send({ embeds: [embed] });
              const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp;
              const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;
              const apiLatency = `\`\`\`ini\n[ ${Math.round(message.client.ws.ping)}ms ]\`\`\``;
              embed.setTitle(`Pong!`)
              .setDescription('')
              .addField(`${client.emoji.success} Latency`, latency, true)
              .addField(`${client.emoji.success} API Latency`, apiLatency, true)
              .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
              .setTimestamp();
              msg.edit({ embeds: [embed] });
              
      //ERROR CATCH
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
};