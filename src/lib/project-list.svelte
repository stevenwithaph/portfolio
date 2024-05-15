<script lang="ts">
	export let title: string;
</script>

<h1 class="text-5xl text-center mb-4 font-semibold sm:text-6xl">{title}</h1>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
	<slot />
</div>
