<script lang="ts">
	export let start: string;
	export let end: string = 'Present';
	export let location: string;
	export let title: string;
</script>

<li class="pt-2">
	<h2 class="font-bold">{location}</h2>
	<h3 class="font-semibold">{title}</h3>
	<div class="capitalize mb-4">
		{start} - {end}
	</div>
	<div>
		<slot />
	</div>
</li>
