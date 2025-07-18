<script lang="ts">
	import Header from './header.svelte';

	const { data, children } = $props();
</script>

<div
	class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
>
	<div class="layout-container flex h-full grow flex-col">
		<Header user={data.user} />
		{@render children()}
	</div>
</div>
