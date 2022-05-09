const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
  name: 'role',
  description: "get gaming console roles",
  userPerms: ["ADMINISTRATOR"],
  run: async (client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return;
    const embed = new MessageEmbed()
      .setTitle("Funções na Equipe")
      .setDescription("Escolha uma role para descrever a sua função dentro da sua equipe (aerodinâmica, cargas, mdo, capitania etc.)!")

    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('area')
          .setPlaceholder('Selecione para adicionar ou remover as roles')
          .addOptions([
            {
              label: 'Aerodinâmica',
              description: "Clique para adicionar ou remover as roles",
              value: 'aerodynamics',
            },
            {
              label: 'Cargas e Aeroelasticidade',
              description: "Clique para adicionar ou remover as roles",
              value: 'load',
            },
            {
              label: 'Capitania',
              description: "Clique para adicionar ou remover as roles",
              value: 'cap',
            },
            {
              label: 'Desempenho',
              description: "Clique para adicionar ou remover as roles",
              value: 'performance',
            },
            {
              label: 'Desenho Técnico',
              description: "Clique para adicionar ou remover as roles",
              value: 'td',
            },
            {
              label: 'Elétrica',
              description: "Clique para adicionar ou remover as roles",
              value: 'electrical',
            },
            {
              label: 'Estabilidade e Controle',
              description: "Clique para adicionar ou remover as roles",
              value: 'stability',
            },
            {
              label: 'Estrutura e Ensaios Estruturais',
              description: "Clique para adicionar ou remover as roles",
              value: 'structure',
            },
            {
              label: 'Financeiro',
              description: "Clique para adicionar ou remover as roles",
              value: 'financial',
            },
            {
              label: 'Integração de Projeto',
              description: "Clique para adicionar ou remover as roles",
              value: 'integration',
            },
            {
              label: 'Logística',
              description: "Clique para adicionar ou remover as roles",
              value: 'log',
            },
            {
              label: 'Marketing',
              description: "Clique para adicionar ou remover as roles",
              value: 'mkt',
            },
            {
              label: 'MDO',
              description: "Clique para adicionar ou remover as roles",
              value: 'mdo',
            },
            {
              label: 'Recursos humanos',
              description: "Clique para adicionar ou remover as roles",
              value: 'hr',
            },
            {
              label: 'Sistemas Embarcados',
              description: "Clique para adicionar ou remover as roles",
              value: 'embedded',
            }
          ]),
      );
    await message.channel.send({ embeds: [embed], components: [row] });
  }
}