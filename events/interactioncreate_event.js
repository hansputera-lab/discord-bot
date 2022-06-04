/** @typedef {import('eris').CommandClient} CommandClient */

/**
 * interactionCreate event bot initializer.
 * @param {CommandClient} bot Eris.CommandClient instance.
 * @return {Promise<void>}
 */
export default async function interactioncreate(bot) {
	bot.on('interactionCreate', async (interaction) => {
		console.log(interaction);
		console.log(bot.commands);
	});
}
