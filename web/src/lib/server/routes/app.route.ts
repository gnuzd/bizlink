import { createTRPCRouter, publicProcedure } from '../context';

export const appRouter = createTRPCRouter({
	hello: publicProcedure.query(() => {
		return { message: 'Hello, world!' };
	})
});

export type AppRouter = typeof appRouter;
