<script lang="ts">
	import Link from '$lib/link.svelte';
	import Typewriter from '$lib/typewriter.svelte';
	import Project from '$lib/project.svelte';
	import ProjectList from '$lib/project-list.svelte';
	import Section from '$lib/section.svelte';
</script>

<section class="py-24 sm:py-64 flex items-center">
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
</section>
<Section title="About Me">
	<p class="md:text-xl text-center m-auto max-w-[100ch]">
		Bringing over six years of experience in full stack development and recently returned to the
		tech industry after military service. With a background in discipline, leadership, and teamwork,
		I thrive in Agile environments and am committed to continuous learning through personal
		projects.
	</p>
</Section>
<ProjectList title="Work">
	<Project
		title={'NSISP'}
		image={'/nsisp-banner.webp'}
		description={'An Instagram like social media app for international students in Halifax.'}
		technologies={'React Native, NodeJS, and Laravel'}
		alt={'NSISP Showcase'}
		url={'https://www.arrivalsdepartures.com/hal/showcase/nova-scotia-international-student-program'}
	/>
	<Project
		title={'Revival Film Studios'}
		image={'/revival-banner.webp'}
		description={'Custom wordpress theme for Revival Studios with an interactive map showcasing their studios'}
		technologies={'Wordpress, Preact, and Bootstrap'}
		alt={'Revival Film Studios Showcase'}
		url={'https://revivalfilmstudios.ca'}
	/>
	<Project
		title={'Nova Scotia Seafood'}
		image={'/nsseafood-banner.webp'}
		description={'A Drupal CMS for Nova Scotia Seafood'}
		technologies={'Drupal and Bootstrap'}
		alt={'Nova Scotia Seafood Showcase'}
		url={'https://nsseafood.com'}
	/>
	<Project
		title={'Telus Sponsorships'}
		image={'/telus-banner.webp'}
		description={'Sponsorship evaluation tool for Telus'}
		technologies={'Angular and Laravel'}
		alt={'Telus Sponsorship Showcase'}
		url={'https://sponsorships.telus.com'}
	/>
	<Project
		title={'Arrivals + Departures'}
		image={'/arrivals-banner.webp'}
		description={'Bolt CMS site'}
		technologies={'Bolt and Bootstrap'}
		alt={'Arrivals + Departures Showcase'}
		url={'https://arrivalsdepartures.com'}
	/>
</ProjectList>
<ProjectList title="Projects">
	<Project
		title={'Medenia'}
		image={'medenia-banner.webp'}
		description={'Private server and web client for Dark Ages'}
		technologies={'Phaser, Svelte, and NodeJS'}
		alt={'Medenia Showcase'}
		url={'https://github.com/stevenwithaph/medenia'}
	/>
	<Project
		title={'Wordle Clone'}
		image={'wordle-banner.webp'}
		description={'As the name implies, a Wordle clone'}
		technologies={'SvelteKit'}
		alt={'Wordle Showcase'}
		url={'https://not-another-wordle-clone.vercel.app'}
	/>
</ProjectList>
