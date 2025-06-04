migrate((app) => {
	let settings = app.settings();

	settings.meta.appName = 'booking';
	settings.meta.appURL = 'http://localhost:5173';
	settings.logs.maxDays = 2;
	settings.logs.logAuthId = true;
	settings.logs.logIP = true;

	app.save(settings);
});
