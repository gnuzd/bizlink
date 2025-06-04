migrate(
	(app) => {
		let superusers = app.findCollectionByNameOrId('_superusers');

		let record = new Record(superusers);

		record.set('email', 'admin@bizlink.com');
		record.set('password', '1234567890');

		app.save(record);
	},
	(app) => {
		try {
			let record = app.findAuthRecordByEmail('_superusers', 'admin@bizlink.com');
			app.delete(record);
		} catch {
			// silent errors (probably already deleted)
		}
	}
);
