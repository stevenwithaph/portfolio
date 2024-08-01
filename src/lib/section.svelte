<script lang="ts">
	import Highlight from './highlight.svelte';

	export let title: string | undefined = undefined;
</script>

<section class="pb-8">
	{#if title}
		<h1 class="decoration-green-500 font-bold mb-4">
			<Highlight>{title}</Highlight>
		</h1>
	{/if}
	<slot />
</section>
