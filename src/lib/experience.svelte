<script lang="ts">
	export let start: string;
	export let end: string = 'present';
	export let title: string;
</script>

<div class="pl-8 border-l-2 border-green-700">
	<div class="mb-4">
		<h3 class="font-semibold">{title}</h3>
		<div class="capitalize">
			{start} - {end}
		</div>
	</div>
	<div>
		<slot />
	</div>
</div>
