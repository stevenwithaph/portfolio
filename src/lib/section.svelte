<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<section>
	{#if title}
		<h2 class="text-4xl mb-8 text-center underline decoration-green-500 font-semibold sm:text-5xl">
			{title}
		</h2>
	{/if}
	<slot />
</section>
