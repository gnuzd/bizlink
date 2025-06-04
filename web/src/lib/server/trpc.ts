import { createTRPCClient, httpBatchLink, httpLink, getFetch } from '@trpc/client';
import type { AppRouter } from './routes/app.route';

type FetchEsque = ReturnType<typeof getFetch>;

const url = '/api/trpc';

export const trpc = createTRPCClient<AppRouter>({
	links: [httpBatchLink({ url })]
});

export const trpcNoBactch = createTRPCClient<AppRouter>({
	links: [httpLink({ url })]
});

export const trpcServer = (fetch: FetchEsque) =>
	createTRPCClient<AppRouter>({ links: [httpBatchLink({ fetch, url })] });
