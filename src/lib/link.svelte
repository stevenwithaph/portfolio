<script lang="ts">
	export let link: string;
	export let text: string;
</script>

<a
	class="relative text-white/50 text-shadow transition-shadow after:content-[''] after:h-[1px] after:scale-x-0 after:absolute after:-bottom-0.5 after:left-0.5 after:right-0.5 after:bg-white/50 after:transition-transform hover:text-green-500 hover:shadow-green-500 hover:after:bg-green-500 hover:after:scale-x-100"
	href={link}
>
	{text}
</a>
