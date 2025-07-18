<script lang="ts">
	import clsx from 'clsx';
	import { Icon } from '$lib/components/core';
	import { page } from '$app/state';
	const { children } = $props();

	const menu = {
		general: [
			{ icon: 'Blocks', label: 'Discover', path: '/discover' },
			{ icon: 'Blocks', label: 'Communities', path: '/hubs' }
		],
		account: [
			{ icon: 'CalendarRange', label: 'Events', path: '/events' },
			{ icon: 'Package', label: 'Services', path: '/services' },
			{ icon: 'Ticket', label: 'Tickets', path: '/tickets' }
		]
	};

	const footerMenu = {
		operators: [
			{ icon: 'LifeBuoy', label: 'FAQ', path: '/faq' }
			// { icon: 'LogIn', label: 'FAQ', path: '/faq' }
		]
	};
</script>

<div class="flex h-dvh w-full bg-base-200/50">
	<div class="flex flex-col">
		<ul class="menu w-56 gap-1 flex-1">
			<li>
				<a href="/" class="text-2xl font-semibold hover:bg-transparent">BizLink</a>
			</li>
			{#each Object.entries(menu) as [key, arr] (key)}
				<li class="menu-title capitalize">{key}</li>
				{#each arr as item (item.path)}
					<li>
						<a href={item.path} class={clsx(item.path === page.url.pathname && 'menu-active')}>
							<Icon name={item.icon} class="size-4" />
							{item.label}
						</a>
					</li>
				{/each}
			{/each}
		</ul>

		<ul class="menu w-56 gap-1">
			{#each Object.entries(footerMenu) as [key, arr] (key)}
				{#each arr as item (item.path)}
					<li>
						<a href={item.path} class={clsx(item.path === page.url.pathname && 'menu-active')}>
							<Icon name={item.icon} class="size-4" />
							{item.label}
						</a>
					</li>
				{/each}
			{/each}
		</ul>
	</div>

	<div class="flex-1 p-3">
		<div class="h-full w-full bg-base-100 rounded-lg p-4 overflow-auto">
			{@render children()}
		</div>
	</div>
</div>
