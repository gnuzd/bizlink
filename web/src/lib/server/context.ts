import { initTRPC, TRPCError } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { ZodError } from 'zod';

export const createSvelteKitTRPCContext =
	(locals: App.Locals) => (_opts: FetchCreateContextFnOptions) =>
		locals;

const t = initTRPC.context<ReturnType<typeof createSvelteKitTRPCContext>>().create({
	errorFormatter: ({ shape, error }) => {
		return {
			...shape,
			data: {
				...shape.data,
				zodError: error.cause instanceof ZodError ? error.cause.flatten() : null
			}
		};
	}
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

const enforceUserIsAuth = t.middleware(async ({ ctx, next }) => {
	const loggedIn = ctx.pb?.authStore;

	if (!loggedIn) {
		throw new TRPCError({
			code: 'UNAUTHORIZED',
			message: 'User is not authenticated'
		});
	}

	return next({ ctx });
});

export const privateProcedure = t.procedure.use(enforceUserIsAuth);
