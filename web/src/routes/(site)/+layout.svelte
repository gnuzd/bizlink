<script lang="ts">
	import Footer from './footer.svelte';
	import Header from './header.svelte';

	const { data, children } = $props();
</script>

<div class="flex flex-col h-dvh">
	<div class="flex h-full grow flex-col px-5">
		<Header user={data.user} />
		{@render children()}
		<Footer />
	</div>
</div>
