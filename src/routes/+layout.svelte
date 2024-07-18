<script lang="ts">
	import '../app.css';
	import '../fontello.css';

	import Link from '$lib/link.svelte';
</script>

<div
	class="p-4 bg-neutral-800 relative before:fixed before:top-0 before:w-full before:h-4 before:bg-neutral-800 before:z-10 after:fixed after:bottom-0 after:w-full after:h-4 after:bg-neutral-800 after:z-10"
>
	<div class="bg-neutral-900">
		<main class="relative container mx-auto space-y-8 pb-6">
			<nav class="sticky top-6 right-6 z-10">
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
	</div>
</div>
