const client = require("../../index.js")
const wait = require('util').promisify(setTimeout);
client.on('interactionCreate', async interaction => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
  if(!interaction.isSelectMenu()) return;
  
  if(interaction.values == 'aerodynamics') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894372975153934396")) {
      await member.roles.add('894372975153934396')
      return interaction.member.send(`A sua role de aerodinâmica foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894372975153934396")) {
      await member.roles.remove('894372975153934396')
      return interaction.member.send(`A sua role de aerodinâmica foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'load') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373626789371967")) {
      await member.roles.add('894373626789371967')
      return interaction.member.send(`A sua role de cargas e aeroelasticidade foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373626789371967")) {
      await member.roles.remove('894373626789371967')
      return interaction.member.send(`A sua role de cargas e aeroelasticidade foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'cap') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373183719882833")) {
      await member.roles.add('894373183719882833')
      return interaction.member.send(`A sua role de capitania foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373183719882833")) {
      await member.roles.remove('894373183719882833')
      return interaction.member.send(`A sua role de capitania foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'performance') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894639963231100980")) {
      await member.roles.add('894639963231100980')
      return interaction.member.send(`A sua role de desempenho foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894639963231100980")) {
      await member.roles.remove('894639963231100980')
      return interaction.member.send(`A sua role de desempenho foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'integration') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("906309507464962078")) {
      await member.roles.add('906309507464962078')
      return interaction.member.send(`A sua role de integração de projeto foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("906309507464962078")) {
      await member.roles.remove('906309507464962078')
      return interaction.member.send(`A sua role de integração de projeto foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'electrical') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373415291613224")) {
      await member.roles.add('894373415291613224')
      return interaction.member.send(`A sua role de elétrica foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373415291613224")) {
      await member.roles.remove('894373415291613224')
      return interaction.member.send(`A sua role de elétrica foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'embedded') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373470413140008")) {
      await member.roles.add('894373470413140008')
      return interaction.member.send(`A sua role de sistemas embarcados foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373470413140008")) {
      await member.roles.remove('894373470413140008')
      return interaction.member.send(`A sua role de sistemas embarcados foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'hr') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373535609401435")) {
      await member.roles.add('894373535609401435')
      return interaction.member.send(`A sua role de recursos humanos foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373535609401435")) {
      await member.roles.remove('894373535609401435')
      return interaction.member.send(`A sua role de recursos humanos foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'log') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373676131164160")) {
      await member.roles.add('894373676131164160')
      return interaction.member.send(`A sua role de logística foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373676131164160")) {
      await member.roles.remove('894373676131164160')
      return interaction.member.send(`A sua role de logística foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'mkt') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373727045820426")) {
      await member.roles.add('894373727045820426')
      return interaction.member.send(`A sua role de marketing foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373727045820426")) {
      await member.roles.remove('894373727045820426')
      return interaction.member.send(`A sua role de marketing foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'mdo') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373773829099520")) {
      await member.roles.add('894373773829099520')
      return interaction.member.send(`A sua role de MDO foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373773829099520")) {
      await member.roles.remove('894373773829099520')
      return interaction.member.send(`A sua role de MDO foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'stability') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373812236324914")) {
      await member.roles.add('894373812236324914')
      return interaction.member.send(`A sua role de estabilidade e controle foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373812236324914")) {
      await member.roles.remove('894373812236324914')
      return interaction.member.send(`A sua role de estabilidade e controle foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'structure') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373862672851004")) {
      await member.roles.add('894373862672851004')
      return interaction.member.send(`A sua role de estrutura e ensaios estruturais foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373862672851004")) {
      await member.roles.remove('894373862672851004')
      return interaction.member.send(`A sua role de estrutura e ensaios estruturais foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'financial') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894687453674352760")) {
      await member.roles.add('894687453674352760')
      return interaction.member.send(`A sua role de financeiro foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894687453674352760")) {
      await member.roles.remove('894687453674352760')
      return interaction.member.send(`A sua role de financeiro foi removida com sucesso!`)
    }
  }
  if(interaction.values == 'td') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("894373916729045002")) {
      await member.roles.add('894373916729045002')
      return interaction.member.send(`A sua role de desenho técnico foi adicionada com sucesso!`)
    } else if(member.roles.cache.has("894373916729045002")) {
      await member.roles.remove('894373916729045002')
      return interaction.member.send(`A sua role de desenho técnico foi removida com sucesso!`)
    }
  }
})