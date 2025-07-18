<script lang="ts">
	import { Search } from '@lucide/svelte';

	import { Input } from '$lib/components/core';
	import { FilterCategories } from '$lib/components/partials';
	import { services } from '$lib/mock/services';
</script>

{#snippet section({ title, data })}
	<section>
		<h2 class="font-bold text-lg leading-tight">{title}</h2>
		<div class="flex flex-nowrap gap-4 py-3 overflow-auto">
			{#each data as item (item.id)}
				<div class="card min-w-60">
					<img src={item.image} alt={item.title} class="rounded-xl" />
					<div class="card-body px-0">
						<h2 class="card-title">Card Title</h2>
						<p class="line-clamp-2">
							{item.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
{/snippet}

<div class="flex flex-col justify-center py-5">
	<div class="max-w-[1440px] mx-auto">
		<div class="flex flex-col gap-5">
			<Input
				name="search"
				icon={{ prefix: { name: 'Search' } }}
				placeholder="Search for services or events"
			/>

			<FilterCategories />

			{@render section({ title: 'Featured', data: services })}

			{@render section({ title: 'Services', data: services })}
		</div>
	</div>
</div>
