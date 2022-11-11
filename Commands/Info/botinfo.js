const { MessageEmbed }= require('discord.js');
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');

module.exports = {
        name: "botinfo",
        aliases: ['stats'],
        description: "Mostra as estatísicas do AeroBot.",
        run: async (client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        try{
        const d = moment.duration(message.client.uptime);
        const days = (d.days() == 1) ? `${d.days()} dia` : `${d.days()} dias`;
        const hours = (d.hours() == 1) ? `${d.hours()} hora` : `${d.hours()} horas`;
        const clientStats = stripIndent`
          Servidores   :: ${message.client.guilds.cache.size}
          Usuários     :: ${message.client.users.cache.size}
          Canais  :: ${message.client.channels.cache.size}
          WS Ping   :: ${Math.round(message.client.ws.ping)}ms
          Uptime    :: ${days} and ${hours}
          Prefix    :: ${prefix}
       `;
        const { totalMemMb, usedMemMb } = await mem.info();
        const serverStats = stripIndent`
          OS        :: ${await os.oos()}
          Cores     :: ${cpu.count()}
          CPU Usage :: ${await cpu.usage()} %
          RAM       :: ${totalMemMb} MB
          RAM Usage :: ${usedMemMb} MB
        `;
    
        const embed = new MessageEmbed()
        .setTitle('Estatísticas do AeroBot')
        .addField('Comandos', `\`${message.client.commands.size}\` commands`, true)
        .addField('Apelidos', `\`${message.client.aliases.size}\` aliases`, true)
        .addField('Client', `\`\`\`asciidoc\n${clientStats}\`\`\``)
        .addField('Server', `\`\`\`asciidoc\n${serverStats}\`\`\``)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
        message.channel.send({ embeds: [embed] });
        
        //ERROR CATCH
        } catch (err) {
            const errorEmbed = new MessageEmbed()
            .setTitle("ERRO")
            .setDescription(`${client.emoji.fail} ${err.message}`)
            .setColor("RED")
            .setFooter("Esta mesagem será deletada depois de 10 segundos.");
            message.channel.send({embeds: [errorEmbed] }).then(e => {
                setTimeout(() => e.delete(), 10000);
            });
        }
     }
};