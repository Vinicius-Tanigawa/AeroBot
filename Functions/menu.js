const chalk = require(`chalk`);
const { MessageSelectMenu, MessageActionRow } = require(`discord.js`);

const create_mh = (array) => {
    if (!array) throw new Error(chalk.red.bold(`As opções não foram informadas! Tenha certeza de que você providencie todas as opções!`));
    if (array.length < 0) throw new Error(chalk.red.bold(`O array necessita ter, ao menos, 1 coisa para selecionar!`));
    let select_menu;
    let id = `help-menus`;
    let menus = [];

    array.forEach(cca => {
        let name = cca;
        let sName = `${name.toUpperCase()}`;
        let tName = name.toLowerCase();
        let fName = name.toUpperCase();

        return menus.push({
            label: sName,
            description: `${tName} comandos!`,
            value: fName
        });
    });

    let smenu1 = new MessageSelectMenu()
        .setCustomId(id)
        .setPlaceholder(`Escolha a categoria do comando`)
        .addOptions(menus);

    select_menu = new MessageActionRow()
        .addComponents(
            smenu1
        );


    return {
        smenu: [select_menu],
        sid: id
    };
};

module.exports = create_mh;
