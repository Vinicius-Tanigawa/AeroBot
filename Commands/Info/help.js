const { MessageEmbed, Message, Client } = require("discord.js");
const { readdirSync } = require("fs");
const { stripIndent } = require('common-tags');
let color = "#ff0000";

const create_mh = require(`../../Functions/menu.js`);
module.exports = {
    name: "help",
    aliases: [`h`],
    description: "Mostra todos os comandos disponíveis do AeroBot",
    run: async (client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        try{
        let categories = [];
        let cots = [];

        if (!args[0]) {
            let ignored = [
                "test"
            ];


            let ccate = [];
            readdirSync("./Commands/").forEach((dir) => {
                if (ignored.includes(dir.toLowerCase())) return;
                const commands = readdirSync(`./Commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );

                if (ignored.includes(dir.toLowerCase())) return;

                const name = `${dir}`;
                let nome = dir.toUpperCase();

                let cats = new Object();
                cats = {
                    name: name,
                    value: `\`${prefix}help ${dir.toLowerCase()}\``,
                    inline: true
                };


                categories.push(cats);
                ccate.push(nome);
            });
            
            const embed = new MessageEmbed()
                .setTitle(`Comandos do AeroBot`)
                .setDescription(`\`\`\`js\n"Prefix": <${prefix}> || "Default Prefix": <!>\n"Syntex": <${prefix}help nome_do_comando>\`\`\``)
                .addFields(categories)
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp()
                .setColor(color);

            let menus = create_mh(ccate);
            return message.reply({
                embeds: [embed],
                components: menus.smenu
            }).then((msgg) => {

                const menuID = menus.sid;

                const select = async (interaction) => {
                    if (interaction.customId != menuID) return;

                    let {
                        values
                    } = interaction;

                    let value = values[0];

                    let catts = [];

                    readdirSync("./Commands/").forEach((dir) => {
                        if (dir.toLowerCase() !== value.toLowerCase()) return;
                        const commands = readdirSync(`./Commands/${dir}/`).filter((file) =>
                            file.endsWith(".js")
                        );
                        const cmds = commands.map((command) => {
                            let file = require(`../../Commands/${dir}/${command}`); //getting the commands again

                            if (!file.name) return "Não há um comando com esse nome.";

                            let name = file.name.replace(".js", "");

                            if (client.commands.get(name).hidden) return;


                            let des = client.commands.get(name).description;
                            let obj = {
                                cname: `\`${name}\``,
                                des
                            };

                            return obj;
                        });

                        let dota = new Object();

                        cmds.map(co => {
                            if (co == undefined) return;

                            dota = {
                                name: `${cmds.length === 0 ? "Em progresso." : co.cname}`,
                                value: co.des ? co.des : `Sem descrição`,
                                inline: true,
                            };
                            catts.push(dota);
                        });

                        cots.push(dir.toLowerCase());
                    });

                    if (cots.includes(value.toLowerCase())) {
                        const combed = new MessageEmbed()
                            .setTitle(`__${value.charAt(0).toUpperCase() + value.slice(1)} Commands!__`)
                            .setDescription(`Use \`${prefix}help\` seguido por um nome de comando para obter mais informações sobre. \nPor exemplo: \`${prefix}help ping\`.\n\n`)
                            .addFields(catts)
                            .setColor(color);

                        await interaction.deferUpdate();

                        return interaction.message.edit({ embeds: [combed], components: menus.smenu});
                    }
                };
                const filter = (interaction) => {
                    return !interaction.user.bot && interaction.user.id == message.author.id;
                };

                const collector = msgg.createMessageComponentCollector({
                    filter,
                    componentType: "SELECT_MENU"
                });
                collector.on("collect", select);
                collector.on("end", () => null);

            });

        } else {
            let catts = [];

            readdirSync("./Commands/").forEach((dir) => {
                if (dir.toLowerCase() !== args[0].toLowerCase()) return;
                const commands = readdirSync(`./Commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );
                    
                const cmds = commands.map((command) => {
                    let file = require(`../../Commands/${dir}/${command}`);
                    if (!file.name) return "Comando sem nome.";
                    let name = file.name.replace(".js", "");
                    if (client.commands.get(name).hidden) return;
                    let des = client.commands.get(name).description;
                    let obj = {
                        cname: `\`${name}\``,
                        des
                    };
                    return obj;
                });
                let dota = new Object();
                cmds.map(co => {
                    if (co == undefined) return;
                    dota = {
                        name: `${cmds.length === 0 ? "Em progresso." : prefix + co.cname}`,
                        value: co.des ? co.des : `Sem descrição`,
                        inline: true,
                    };
                    catts.push(dota);
                });

                cots.push(dir.toLowerCase());
            });

            const command =
                client.commands.get(args[0].toLowerCase()) ||
                client.commands.find(
                    (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                );

            if (cots.includes(args[0].toLowerCase())) {
                const combed = new MessageEmbed()
                    .setTitle(`__${args[0].charAt(0).toUpperCase() + args[0].slice(1)} Commands!__`)
                    .setDescription(`Use \`${prefix}help\` fseguido por um nome de comando para obter mais informações sobre.\nPor exemplo: \`${prefix}help ping\`.\n\n`)
                    .addFields(catts)
                    .setColor(color);

                return message.reply({ embeds: [combed] });
            }

            if (!command) {
                const embed = new MessageEmbed()
                    .setTitle(`Comando inválido! Use \`${prefix}help\` para ver todos os meus comandos!`)
                    .setColor("RED");
                return await message.reply({
                    embeds: [embed],
                    allowedMentions: {
                        repliedUser: false
                    },
                });
            }
            const embed = new MessageEmbed()
                .setTitle("Detalhe do comando:")
                .addField(
                    "Comando:",
                    command.name ? `\`${command.name}\`` : "Não há nome para este comando."
                )
                .addField(
                    "Apelidos:",
                    command.aliases ?
                    `\`${command.aliases.join("` `")}\`` :
                    "Não há apelidos para este comando."
                )
                .addField(
                    "Usage:",
                    command.usage ?
                    `\`${prefix}${command.name} ${command.usage}\`` :
                    `\`${prefix}${command.name}\``
                )
                .addField(
                    "Descrição do comando:",
                    command.description ?
                    command.description :
                    "Não há descrição para este comando."
                )
                .setFooter(
                    `Requisitado por ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp()
                .setColor(color);
            return await message.reply({
                embeds: [embed]
            });
           }
           
      //ERROR CATCH
      } catch (err) {
         const errorEmbed = new MessageEmbed()
         .setTitle("ERRO")
         .setDescription(`${client.emoji.fail} ${err.message}`)
         .setColor("RED")
         .setFooter("Esta mensagem será deletada em 10 segundos");
         message.channel.send({embeds: [errorEmbed] }).then(e => {
            setTimeout(() => e.delete(), 10000);
      });
    }
  },
}