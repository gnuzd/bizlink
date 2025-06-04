<script lang="ts">
	import { browser } from '$app/environment';
	import { trpc } from '$lib/trpc';
	if (browser) trpc.hello.query();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
