<script lang="ts">
	export let link: string;
</script>

<a
	class="relative text-shadow transition-shadow after:content-[''] after:h-[1px] after:scale-x-0 after:absolute after:-bottom-0.5 after:left-0.5 after:right-0.5 after:bg-white after:transition-transform hocus:text-green-500 hocus:shadow-green-500 hocus:after:bg-green-500 hocus:after:scale-x-100"
	href={link}
>
	<slot />
</a>
