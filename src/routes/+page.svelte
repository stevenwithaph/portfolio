<script lang="ts">
	import Typewriter from '$lib/typewriter.svelte';
	import '../app.css';
</script>

<div class="container mx-auto px-4">
	<main class="relative">
		<div class="absolute top-1 right-0">
			<a
				class="rounded-lg text-white/50 underline underline-offset-4 text-shadow hover:text-green-500 hover:shadow-green-500"
				href="mailto:&#115;&#116;&#101;&#118;&#101;&#110;&#046;&#097;&#100;&#097;&#109;&#115;&#046;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
			>
				Contact
			</a>
		</div>
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
</div>
