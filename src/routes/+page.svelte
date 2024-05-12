<script lang="ts">
	import Link from '$lib/link.svelte';
	import Typewriter from '$lib/typewriter.svelte';
	import { toHtmlEntities } from '$lib/utils';
	import '../app.css';
</script>

<main class="container mx-auto px-4">
	<nav class="fixed top-4 right-4">
		<ul class="flex justify-end gap-x-2">
			<li>
				<Link link={`mailto:steven.adams.r@gmail.com`} text={'Contact'} />
			</li>
		</ul>
	</nav>
	<div class="min-h-svh flex items-center">
		<div class="text-center w-full space-y-4">
			<h1 class="text-5xl sm:text-6xl font-bold">
				Hi, I'm
				<span
					class="bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text text-shadow shadow-green-500"
				>
					Steven
				</span>
			</h1>
			<h2 class="text-3xl font-bold h-[1em] sm:text-6xl"><Typewriter /></h2>
		</div>
	</div>
</main>
