<script lang="ts">
	import '../app.css';
	import '../fontello.css';

	import Link from '$lib/link.svelte';
</script>

<main class="relative container mx-auto p-2 space-y-8">
	<nav class="sticky top-2 right-2 z-10">
		<ul class="flex justify-end gap-x-4 text-neutral-400 text-xl">
			<li>
				<Link target={'_blank'} link={`https://www.linkedin.com/in/steven-adams-r/`}>
					<span class={`icon-linkedin`}></span>
				</Link>
			</li>
			<li>
				<Link target={'_blank'} link={`https://github.com/stevenwithaph`}>
					<span class={`icon-github`}></span>
				</Link>
			</li>
			<li>
				<Link target={'_self'} link={`mailto:steven.adams.r@gmail.com`}>
					<span class={`icon-mail`}></span>
				</Link>
			</li>
		</ul>
	</nav>
	<slot />
</main>
