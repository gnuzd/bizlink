import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/components/forms/auth.schema';
import { fail } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions = {
	login: async ({ request, locals }) => {
		const form = await superValidate(request, zod4(loginSchema));
		if (!form.valid) return fail(400, { data: form });

		await locals.pb.collection('users').authWithPassword(form.data.email, form.data.password);
		const authStore = locals.pb.authStore;
		locals.pb.authStore.exportToCookie({ sameSite: 'Lax', httpOnly: false });
		if (authStore.isValid) {
			return message(form, { status: 'success', text: 'Form "login" posted successfully!' });
		}
	},
	logout: ({ locals }) => {
		locals.pb.authStore.clear();
		return {};
	}
} satisfies Actions;
