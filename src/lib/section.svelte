<script lang="ts">
	import Highlight from './highlight.svelte';

	export let title: string | undefined = undefined;
</script>

<section class="pb-8">
	{#if title}
		<h2 class="decoration-green-500 font-bold mb-4">
			<Highlight>{title}</Highlight>
		</h2>
	{/if}
	<slot />
</section>
