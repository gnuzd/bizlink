<script lang="ts">
	import { enhance } from '$app/forms';
	import { modal } from '$lib/components/core/modal/store.svelte';

	import AuthForm from '$lib/components/forms/auth.form.svelte';
	import type { Snippet, SvelteComponent } from 'svelte';

	interface User {
		name: string;
		email: string;
	}

	const { user }: { user: User | null } = $props();
</script>

{#snippet title()}
	<h3 class="text-xl font-bold">Authorization</h3>
	<p class="text-sm font-medium">Welcome to BizLink - Verify your account to perform actions</p>
{/snippet}

<div class="navbar bg-base-100/60 sticky top-0 z-50 backdrop-blur-sm px-0 gap-5">
	<a class="text-xl font-bold cursor-pointer">BizLink</a>

	<div class="flex-1">
		<ul class="menu menu-horizontal">
			<li><a>Explore</a></li>
			<li><a>For Business</a></li>
		</ul>
	</div>

	<div class="flex gap-2">
		{#if user}
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							alt="Tailwind CSS Navbar component"
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
						/>
					</div>
				</div>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
				>
					<li>
						<a class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a>Settings</a></li>
					<li>
						<form action="/actions/auth?/logout" method="POST" use:enhance>
							<button type="submit">Logout</button>
						</form>
					</li>
				</ul>
			</div>
		{:else}
			<button
				class="btn btn-primary btn-outline btn-sm"
				onclick={() =>
					modal.open(AuthForm, {
						title,
						dismissible: true,
						class: '[&>.modal-box]:w-md'
					})}
			>
				Get Started
			</button>
		{/if}
	</div>
</div>
