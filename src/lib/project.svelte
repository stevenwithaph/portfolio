<script lang="ts">
	export let title: string;
	export let description: string;
	export let technologies: string[] = [];
	export let url: string;
</script>

<li
	class="group relative after:content-[''] after:transition-colors after:absolute after:-inset-x-2 after:-inset-y-0 hover:after:bg-neutral-800 after:-z-10 first:after:rounded-t-lg last:after:rounded-b-lg"
>
	<a href={url} target={'_blank'} class="block border-b border-neutral-800 py-2">
		<h2 class="font-bold">{title}</h2>
		<p>
			{@html description}
		</p>
	</a>
	<div class="absolute inset-y-0 right-0 m-auto flex items-center">
		<span class="group-hover:text-green-500 text-3xl transition-colors">&rsaquo;</span>
	</div>
</li>
