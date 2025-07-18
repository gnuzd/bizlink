<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Input } from '$lib/components/core';
	import { modal } from '../core/modal';

	const { form, enhance, message } = superForm({ email: '', password: '' });

	message.subscribe((res) => {
		if (res?.status === 'success') modal.close();
	});
</script>

<div class="flex flex-col gap-5">
	<form class="flex flex-col gap-3" action="/actions/auth?/login" method="POST" use:enhance>
		<div>
			<Input name="email" label="Email" placeholder="example@gmail.com" bind:value={$form.email} />
			<Input
				name="password"
				label="Password"
				type="password"
				placeholder="Password"
				bind:value={$form.password}
			/>
		</div>
		<button class="btn btn-neutral">Continue</button>
	</form>
</div>
