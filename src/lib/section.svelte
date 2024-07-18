<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<section>
	{#if title}
		<h2 class="text-2xl mb-8 text-center underline decoration-green-500 font-semibold sm:text-4xl">
			{title}
		</h2>
	{/if}
	<slot />
</section>
