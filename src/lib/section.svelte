<script lang="ts">
	export let title: string;
</script>

<section>
	<h2 class="text-4xl mb-8 underline decoration-green-500 font-semibold sm:text-5xl">{title}</h2>
	<slot />
</section>
