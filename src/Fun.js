/**
 * @author Anish Shobith
 * @license MIT
 */
const fetch = require('node-fetch');
const { RichEmbed } = require('discord.js').catch(() => console.error('[Error]: You don\'t have Discord.js installed'));


/**
 *
 * @param  {any} message
 * @return
 */
async function meme(message) {
	const subreddits = [
		'memes',
		'DeepFriedMemes',
		'bonehurtingjuice',
		'surrealmemes',
		'dankmemes',
		'meirl',
		'me_irl',
		'funny',
	];

	const data = await fetch(`https://imgur.com/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/hot.json`).then(response => response.json()).then(body => body.data);
	const selected = data[Math.floor(Math.random() * data.length)];

	return message.channel.send(new RichEmbed().setImage(`http://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`));
}


/**
 *
 * @param  {any} message
 * @return
 */
async function catfacts(message) {

	const fact = await fetch('https://catfact.ninja/fact').then(response => response.json()).then(body => body.fact);
	return message.channel.send(`**Catfact:** ${fact}`);
}


/**
 *
 * @param  {any} message
 * @return
 */
async function dogfacts(message) {

	// eslint-disable-next-line quotes
	const fact = await fetch(`http://dog-api.kinduff.com/api/facts?number=1`).then(response => response.json()).then(body => body.fact[0]);
	return message.channel.send(`**Dogfact:** ${fact}`);
}

/**
 *
 * @param  {any} message
 * @param  {any} question
 * @return {void}
 */
async function eightball(message, question) {

	const answers = [
		'Maybe.',
		'Certainly not.',
		'I hope so.',
		'Not in your wildest dreams.',
		'There is a good chance.',
		'Quite likely.',
		'I think so.',
		'I hope not.',
		'I hope so.',
		'Never!',
		'Fuhgeddaboudit.',
		'Ahaha! Really?!?',
		'Pfft.',
		'Sorry, bucko.',
		'Hell, yes.',
		'Hell to the no.',
		'The future is bleak.',
		'The future is uncertain.',
		'I would rather not say.',
		'Who cares?',
		'Possibly.',
		'Never, ever, ever.',
		'There is a small chance.',
		// eslint-disable-next-line comma-dangle
		'Yes!'
	];
	message.reply(question.endsWith('?') ? `${answers[Math.floor(Math.random() * answers.length)]}` : 'That does not look like a question please try again later...');
}

module.exports = {
	meme,
	catfacts,
	dogfacts,
	eightball,
};
