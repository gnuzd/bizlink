import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '$lib/server/routes/app.route';
import { createSvelteKitTRPCContext } from '$lib/server/context';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ((event) => {
	return fetchRequestHandler({
		req: event.request,
		router: appRouter,
		endpoint: '/api/trpc',
		createContext: createSvelteKitTRPCContext(event.locals)
	});
}) satisfies RequestHandler;

export const POST = GET;
