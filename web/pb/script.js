import fs from 'node:fs';
import path from 'node:path';

function main() {
	const args = process.argv;
	const filename = args.find((a) => a.includes('--name')).split('=')[1];
	const timestamps = Math.round(Date.now() / 1000);

	if (!filename) {
		console.error('Please provide a filename using --name=filename');
		return;
	}

	try {
		const content = `
migrate((app) => {
    // add up queries...
}, (app) => {
    // add down queries...
})
`;
		fs.writeFileSync(
			path.join(process.cwd(), './pb/migrations', `${timestamps}_${filename}.js`),
			content
		);
		console.info(`Generated to ${filename}`);
	} catch (err) {
		console.error(`Failed to write timestamp to file: ${err.message}`);
	}
}

main();
