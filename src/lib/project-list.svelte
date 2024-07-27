<script lang="ts">
	import Section from './section.svelte';

	export let title: string;
</script>

<Section {title}>
	<ul>
		<slot />
	</ul>
</Section>
