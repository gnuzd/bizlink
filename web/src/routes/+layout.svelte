<script lang="ts">
	import Modal from '$lib/components/core/modal/modal.svelte';
	import '../app.css';
	const { children } = $props();
</script>

{@render children()}
<Modal />
