const { MessageEmbed } = require('discord.js');

module.exports = {
      name: 'kick',
      usage: 'kick <user mention/ID> [reason]',
      description: 'Expulsa membros do servidor.',
      clientPerms: ['SEND_MESSAGES', 'EMBED_LINKS', 'KICK_MEMBERS'],
      userPerms: ['KICK_MEMBERS'],
      run: async(client, message, args, prefix) => {
          if(!message.content.startsWith(prefix)) return;
          try{
          const member = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
          if (!member)
          return message.channel.send(`${client.emoji.fail} Por favor, mencione um usuário ou ID válido.`);
          if (member === message.member)
          return message.channel.send(`${client.emoji.fail} Você não pode se autoexpulsar`);
          if (member.roles.highest.position >= message.member.roles.highest.position)
          return message.channel.send(`${client.emoji.fail} Você não pode expulsar alguém com role de mesmo nível ou acima.`);
          if (!member.kickable)
          return message.channel.send(`${client.emoji.fail} Não é possível expulsar este membro.`);
          let reason = args.slice(1).join(' ');
          if (!reason) reason = '`None`';
          if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';
          await member.kick(reason);
          const embed = new MessageEmbed()
          .setTitle('Explusar Membro')
          .setDescription(`${client.emoji.success} ${member} foi expulso.`)
          .addField('Moderador', `${message.member || undefined}`, true)
          .addField('Membro', `${member || undefined}`, true)
          .addField('Justificativa', `${reason || undefined}`)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor("GREEN")
          message.channel.send({ embeds: [embed] })
          message.author.send(`${message.guild.name}: ${message.author.tag} expulsou ${member.user.tag} pela seguinte justificativa: ${reason}`)
              

      //ERROR CATCH
      } catch (err) {
      const errorEmbed = new MessageEmbed()
      .setTitle("ERRO")
      .setDescription(`${client.emoji.fail} ${err.message}`)
      .setColor("RED")
      .setFooter("Esta mensagem será deletada em 10 segundos!");
      message.channel.send({ embeds: [errorEmbed] }).then(e => {
        setTimeout(() => e.delete(), 10000);
      });
    }
  }
};
