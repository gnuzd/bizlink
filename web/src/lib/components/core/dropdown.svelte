<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Icon from './icon.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		trigge: Snippet;
		// 	trigger: {
		// 		text?: string;
		// 		class?: string;
		// 		icon?: {
		// 			left?: string;
		// 			right?: string;
		// 		};
		// 	};
	};

	const { trigger }: Props = $props();
</script>

<details class="dropdown">
	<!-- <summary class={twMerge('btn m-1', trigger.class)}> -->
	<!-- 	<Icon name={trigger.icon?.left} /> -->
	<!-- 	<span>{trigger.text}</span> -->
	<!-- 	<Icon name={trigger.icon?.right} /> -->
	<!-- </summary> -->
	<ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
		<li><a>Item 1</a></li>
		<li><a>Item 2</a></li>
	</ul>
</details>
