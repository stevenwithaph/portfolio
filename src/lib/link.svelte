<script lang="ts">
	export let link: string;
	export let target: string;
</script>

<a
	class="relative text-shadow transition-shadow after:content-[''] after:h-[1px] after:scale-x-0 after:absolute after:-bottom-0.5 after:left-0.5 after:right-0.5 after:bg-neutral-200 after:transition-transform hocus:text-green-500 hocus:shadow-green-500"
	{target}
	href={link}
>
	<slot />
</a>
