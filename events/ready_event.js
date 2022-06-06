/** @typedef {import('eris').CommandClient} CommandClient */

/**
 * ready event bot initializer.
 * @param {CommandClient} bot Eris.CommandClient instance.
 * @return {Promise<void>}
 */
export default async function ready(bot) {
	bot.on('ready', async () => {
		bot.editStatus('dnd', {
			name: 'w/ filo!',
			type: 0,
		});

		console.log(bot.user.username, 'is ready');
		const commands = bot.commands;
		Object.keys(commands).forEach((command) => {
			bot.createCommand({
				name: command,
				description: command.description || `${command} command`,
			});
		});
	});
}
