<script lang="ts">
	export let title: string;
</script>

<h2 class="text-4xl text-center mb-8 font-semibold sm:text-5xl">{title}</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	<slot />
</div>
