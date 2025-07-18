<script lang="ts">
	import Input from './input.svelte';

	type Props = {
		length?: number;
	};
	const { length = 6 }: Props = $props();

	const handleChange = () => {};

	function shiftFocus(key: string) {
		if (
			(!/[0-9]/.test(key) && num && key) ||
			key === 'ArrowRight' ||
			key === 'ArrowLeft' ||
			key === 'Backspace'
		)
			return;
		if (value === ' ') {
			value = '';
			return;
		}
		if (index !== inputs.length - 1) (inputs[index + 1] as HTMLInputElement).focus();
	}
</script>

<div class="flex justify-around items-center gap-5">
	{#each Array.from({ length }) as i}
		<div class="aspect-square size-10">
			<Input />
		</div>
	{/each}
</div>
