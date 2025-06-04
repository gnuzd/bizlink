import { getContext, setContext } from 'svelte';
import PocketBase from 'pocketbase';

import { browser } from '$app/environment';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

const POCKETBASE = 'POCKETBASE';

function createInstance() {
	const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
	if (browser) {
		setContext(POCKETBASE, pb);
	}

	return pb;
}

export function getInstance() {
	if (browser) {
		const pb = getContext(POCKETBASE) as PocketBase;

		if (pb) {
			pb.authStore?.loadFromCookie(document.cookie || '');
			return pb;
		}
	}

	return createInstance();
}
