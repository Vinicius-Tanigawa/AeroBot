const { Util, MessageEmbed, Permissions } = require("discord.js");
const { parse } = require("twemoji-parser");
const Color = "RANDOM";

module.exports = {
  name: "addemoji",
  aliases: ["ae"],
  description: "Adiciona emojis no servidor.",
  clientPerms: ["MANAGE_EMOJIS_AND_STICKERS"],
  userPerms: ["MANAGE_EMOJIS_AND_STICKERS"],
  usage: "<emojiname> or <link>",
  run: async(client, message,args, prefix) => {
      try{
          if(!message.content.startsWith(prefix)) return;
          const emoji = args[0];
          if(!emoji) return message.channel.send(`**Por favor, providencie-me um emoji para adicionar.**`);
          let customemoji = Util.parseEmoji(emoji);
          if(customemoji.id) {
              const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"}`;
              const name = args.slice(1).join(" ");
              message.guild.emojis.create(
                  `${Link}`,
                  `${name || `${customemoji.name}`}`
                  );
                  const Added = new MessageEmbed()
                  .setColor(Color)
                  .setDescription(`${client.emoji.success} Emoji foi adicionado com sucesso!\nNome: ${name || `${customemoji.name}`}\nPrévia: [Click Me](${Link})`);
                  return message.channel.send({ embeds: [Added] });
          } else {
              let CheckEmoji = parse(emoji, { assetType: "png" });
              if (!CheckEmoji[0])
              return message.channel.send(`${client.emoji.fail} Por favor, providencie um emoji válido.`);
              message.channel.send(`${client.emoji.fail} Você pode usar um emoji normal sem adicioná-lo ao servidor.`);
          } 

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
}