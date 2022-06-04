/** @typedef {import('eris').CommandClient} CommandClient */

/**
 * Ready event bot initializer.
 * @param {CommandClient} bot Eris.CommandClient instance.
 * @return {Promise<void>}
 */
export default async function readyEvent(bot) {
	bot.on('ready', async () => {
		bot.editStatus('dnd', {
			name: 'w/ filo!',
			type: 0,
		});

		console.log(bot.user.username, 'is ready');

                console.log(await bot.createCommand({
                  name: 'help',
                  description: 'asdsadads',
                }));
	});
}
