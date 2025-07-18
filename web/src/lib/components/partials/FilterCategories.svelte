<script lang="ts">
	const categories = [
		{ value: 'music', label: 'Music' },
		{ value: 'food_drink', label: 'Food & Drink' },
		{ value: 'health_wellness', label: 'Health & Wellness' },
		{ value: 'sport_fitness', label: 'Sport & Fitness' },
		{ value: 'home_services', label: 'Home Services' },
		{ value: 'personal_care', label: 'Personal Care' }
	];
</script>

<section class="space-y-3">
	<h2 class="text-lg font-bold leading-tight">Popular Categories</h2>
	<form class="filter flex flex-nowrap overflow-auto">
		<input class="btn btn-square btn-sm" type="reset" value="×" />
		{#each categories as item (item.value)}
			<input class="btn btn-sm" type="radio" name="category" aria-label={item.label} />
		{/each}
	</form>
</section>
