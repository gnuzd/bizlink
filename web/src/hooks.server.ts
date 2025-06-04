import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { getInstance } from '$lib/pb';

export const authentication: Handle = async ({ event, resolve }) => {
	event.locals.pb = getInstance();
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
		}
	} catch (_error) {
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);
	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ sameSite: 'Lax', httpOnly: false })
	);

	return response;
};

const protectPrefix = ['/dashboard', '/profile'];
export const authorization: Handle = async ({ event, resolve }) => {
	if (protectPrefix.some((path) => event.url.pathname.startsWith(path))) {
		const loggedIn = event.locals.pb?.authStore;
		if (!loggedIn) {
			throw redirect(303, '/');
		}
	}

	// If the request is still here, just proceed as normally
	const result = await resolve(event);
	return result;
};

export const handle = sequence(authorization, authentication);
