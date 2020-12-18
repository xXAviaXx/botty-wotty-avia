module.exports = {
    name: 'groups',
    description: 'This is our groups discord servers and groups!',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
	.setColor('#304201')
	.setTitle('The United Kingdom')
	.setURL('https://roblox.com')
	.setAuthor('The United Kingdom', 'https://media.discordapp.net/attachments/577171965224157197/788630262355460096/Own_UK_GFX.png?width=1039&height=584', 'https://roblox.com')
	.setDescription('A United Kingdom founded by robloxwizard200005!')
	.setThumbnail('https://media.discordapp.net/attachments/577171965224157197/788630262355460096/Own_UK_GFX.png?width=1039&height=584')
	.addFields( // By the way \u200B is a space.
		{ name: 'Discord Servers and Groups', value: 'Discord Servers are linked below and beneath are our groups!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Buckingham Palace', value: 'https://discord.gg/ycZEejs', inline: true },
        { name: 'House of Parliament', value: 'https://discord.gg/FpC9z3F', inline: true },
		{ name: 'British Armed Forces', value: 'https://discord.gg/ZBXsP4HZ9z', inline: true },
		{ name: 'British Armed Forces', value: 'https://www.roblox.com/groups/8639804/UK-British-Armed-Forces#!/about', inline: true },
		{ name: 'Royal Household', value: 'https://www.roblox.com/groups/8182430/Royal-Household#!/about', inline: true },
		{ name: 'Main Group', value: 'https://www.roblox.com/groups/8617636/UK-United-Kingdom#!/about', inline: true },
	)
	.addField('Our Main Roblox Group:', 'https://www.roblox.com/groups/8617636/UK-United-Kingdom#!/about', true)
	.setImage('https://media.discordapp.net/attachments/577171965224157197/788630262355460096/Own_UK_GFX.png?width=1039&height=584')
	.setTimestamp()
	.setFooter('Bot created by Avia#3393', 'https://media.discordapp.net/attachments/577171965224157197/788630262355460096/Own_UK_GFX.png?width=1039&height=584');

        message.channel.send(newEmbed);
    }
}