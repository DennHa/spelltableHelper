const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spelltable')
        .setDescription('Manipulates Spelltable links.')
        .addStringOption(option =>
            option.setName('link')
                .setDescription('The Spelltable link.')
                .setRequired(true)),
    async execute(interaction) {
        const link = interaction.options.getString('link');

        if (link && link.startsWith('https://spelltable.wizards.com/game/')) {
            const spectateLink = link + '/?spectate=true';
            const response = `Spiel: ${link}\nZuschauen: ${spectateLink}`;

            await interaction.reply(response);
        } else {
            await interaction.reply('Invalid Spelltable link provided.');
        }
    },
};
