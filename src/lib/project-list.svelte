<script lang="ts">
	import Section from './section.svelte';

	export let title: string;
</script>

<Section {title}>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		<slot />
	</div>
</Section>
