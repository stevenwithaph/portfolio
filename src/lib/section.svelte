<script lang="ts">
	import Highlight from './highlight.svelte';

	export let title: string | undefined = undefined;
</script>

<section class="relative">
	{#if title}
		<h2 class="text-2xl mb-8 decoration-green-500 font-semibold sm:text-4xl">
			<Highlight>{title}</Highlight>
		</h2>
	{/if}
	<slot />
</section>
