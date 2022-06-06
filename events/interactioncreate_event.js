import { CommandInteraction } from 'eris';

/** @typedef {import('eris').CommandClient} CommandClient */

/**
 * interactionCreate event bot initializer.
 * @param {CommandClient} bot Eris.CommandClient instance.
 * @return {Promise<void>}
 */
export default async function interactioncreate(bot) {
	bot.on('interactionCreate', async (interaction) => {
		if (interaction instanceof CommandInteraction) {
			await interaction.defer();
			const command = bot.commands[interaction.data.name];
			if (command) {
				const m = await interaction.getOriginalMessage();
				m.interaction = {
					...m.interaction,
					token: interaction.token,
					appID: interaction.applicationID,
				};

				command.executeCommand(m, []);
			} else {
				await interaction.deleteMessage();
			}
		}
	});
}
