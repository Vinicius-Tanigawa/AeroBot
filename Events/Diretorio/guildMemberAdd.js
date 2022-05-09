const client = require("../../index.js");
const { MessageEmbed } = require('discord.js');

client.on('guildMemberAdd', async(member) => {
  const Channel = member.guild.channels.cache.get('888247972201127986');
  const embed = new MessageEmbed()
  .setColor("GREEN")
  .setTitle("Member Join")
  .setDescription(`Olá **${member.displayName}**! Nós do servidor ${member.guild.name} ficamos muito felizes por você estar aqui! Agora somos ${member.guild.memberCount} membros!

Vá para <#887068765374775307> e diga a qual equipe você pertence ou se é da comissão técnica aerodesign ou se é do juizado aerodesign ou se é apenas um curioso e quer estar conosco!

Por fim, aproveite para ir em <#894375800407720007> para escolher as suas roles!`);
  Channel.send({ embeds: [embed] });
});