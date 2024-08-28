<script lang="ts">
	import '../app.css';
	import '../fontello.css';

	import Link from '$lib/link.svelte';
	import Cursor from '$lib/cursor.svelte';
</script>

<header class="fixed top-0 w-full py-2 bg-neutral-900/20 backdrop-blur">
	<div class="max-w-screen-sm m-auto px-4">
		<ul class="z-10 flex justify-end gap-x-4 text-neutral-400">
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
	</div>
</header>

<main class="max-w-screen-sm m-auto px-4">
	<slot />
</main>

<Cursor />
