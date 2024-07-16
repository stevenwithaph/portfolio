<script lang="ts">
	import Typewriter from '$lib/typewriter.svelte';
	import Project from '$lib/project.svelte';
	import ProjectList from '$lib/project-list.svelte';
	import Section from '$lib/section.svelte';
</script>

<section class="py-16 flex items-center">
	<div class="text-center w-full space-y-4">
		<h1 class="text-5xl sm:text-6xl font-bold">
			Hi, I'm
			<span
				class="bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text text-shadow shadow-green-500"
			>
				Steven
			</span>
		</h1>
		<h2 class="text-4xl font-bold h-[1em]"><Typewriter /></h2>
	</div>
</section>
<Section>
	<p class="md:text-lg text-center m-auto max-w-[100ch]">
		Experienced Full Stack Developer with 6+ years in web development, returning to the technology
		field after military service. Skilled in React, Angular, Node.js, and PHP, with experience
		deploying applications to cloud environments and optimizing system performance. Skilled in
		integrating front-end and back-end technologies to deliver tailored solutions; committed to
		innovation through ongoing personal projects, with experience in game development.
	</p>
</Section>
<ProjectList title="Work">
	<Project
		title={'NSISP'}
		image={'/nsisp-banner.webp'}
		description={'An Instagram like social media app for international students in Halifax.'}
		technologies={['React Native', 'NodeJS', 'Laravel']}
		alt={'NSISP Showcase'}
		url={'https://www.arrivalsdepartures.com/hal/showcase/nova-scotia-international-student-program'}
	/>
	<Project
		title={'Revival Film Studios'}
		image={'/revival-banner.webp'}
		description={'Custom wordpress theme for Revival Studios with an interactive map showcasing their studios'}
		technologies={['WordPress', 'Preact', 'Bootstrap']}
		alt={'Revival Film Studios Showcase'}
		url={'https://revivalfilmstudios.ca'}
	/>
	<Project
		title={'Nova Scotia Seafood'}
		image={'/nsseafood-banner.webp'}
		description={'A Drupal website for Nova Scotia Seafood'}
		technologies={['Drupal', 'Bootstrap']}
		alt={'Nova Scotia Seafood Showcase'}
		url={'https://nsseafood.com'}
	/>
	<Project
		title={'Telus Sponsorships'}
		image={'/telus-banner.webp'}
		description={'Sponsorship evaluation tool for Telus'}
		technologies={['Angular', 'Laravel']}
		alt={'Telus Sponsorship Showcase'}
		url={'https://sponsorships.telus.com'}
	/>
	<Project
		title={'Arrivals + Departures'}
		image={'/arrivals-banner.webp'}
		description={'Bolt based website'}
		technologies={['Bolt', 'Bootstrap']}
		alt={'Arrivals + Departures Showcase'}
		url={'https://arrivalsdepartures.com'}
	/>
</ProjectList>
<ProjectList title="Projects">
	<Project
		title={'Medenia'}
		image={'medenia-banner.webp'}
		description={'Private server and web client for Dark Ages'}
		technologies={['Phaser', 'Svelte', 'NodeJS']}
		alt={'Medenia Showcase'}
		url={'https://github.com/stevenwithaph/medenia'}
	/>
	<Project
		title={'Wordle Clone'}
		image={'wordle-banner.webp'}
		description={'As the name implies, a Wordle clone'}
		technologies={['SvelteKit']}
		alt={'Wordle Showcase'}
		url={'https://not-another-wordle-clone.vercel.app'}
	/>
</ProjectList>
