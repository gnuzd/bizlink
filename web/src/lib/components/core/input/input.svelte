<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Icon from '../icon.svelte';

	type Props = {
		value?: string;
		label?: string;
		name?: string;
		error?: string;
		hint?: string;
		placeholder?: string;
		type?: 'text' | 'email' | 'password';
		disabled?: boolean;
		icon?: {
			prefix?: { name: string; class?: string };
			subfix?: { name: string; class?: string };
		};
	};

	let {
		value = $bindable(),
		icon,
		error,
		hint,
		disabled,
		placeholder,
		type = 'text',
		name,
		label
	}: Props = $props();
</script>

<fieldset class="fieldset w-full">
	{#if label}
		<legend class="fieldset-legend">{label}</legend>
	{/if}

	<label class="input w-full" class:input-error={error}>
		{#if icon?.prefix}
			<Icon name={icon.prefix.name} class={twMerge('h-5 opacity-50', icon.prefix.class)} />
		{/if}
		<input {type} {name} {placeholder} {disabled} bind:value class="grow [:user-invalid]" />
		{#if icon?.subfix}
			<Icon name={icon.subfix.name} class={twMerge('h-5 opacity-50', icon.subfix.class)} />
		{/if}
	</label>

	<p class="fieldset-label">{hint}</p>
	<p class="fieldset-label text-error" class:hidden={!error}>* {error}</p>
</fieldset>
