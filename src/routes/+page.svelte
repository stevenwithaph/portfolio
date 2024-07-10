<script lang="ts">
	import '../app.css';

	import Link from '$lib/link.svelte';
	import Typewriter from '$lib/typewriter.svelte';
	import Project from '$lib/project.svelte';
	import ProjectList from '$lib/project-list.svelte';
</script>

<main class="relative max-w-[1440px] mx-auto p-2 space-y-8">
	<nav class="sticky top-2 right-2 z-10">
		<ul class="flex justify-end gap-x-2 text-neutral-400 text-xl">
			<li>
				<Link target={'_blank'} link={`https://www.linkedin.com/in/steven-adams-r/`}>
					<li class={`icon-linkedin`}></li>
				</Link>
			</li>
			<li>
				<Link target={'_blank'} link={`https://github.com/stevenwithaph`}>
					<li class={`icon-github`}></li>
				</Link>
			</li>
			<li>
				<Link target={'_self'} link={`mailto:steven.adams.r@gmail.com`}>
					<li class={`icon-mail`}></li>
				</Link>
			</li>
		</ul>
	</nav>
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
	<section>
		<ProjectList title="Work">
			<Project
				title={'NSISP'}
				image={'/nsisp-banner.webp'}
				description={'An Instagram like social media app for international students in Halifax'}
				technologies={'React Native, NodeJS, and Laravel'}
				alt={'NSISP Showcase'}
				links={[
					{ url: 'https://apps.apple.com/us/app/nsisp-passport-app/id1276287671', icon: 'apple' },
					{
						url: 'https://play.google.com/store/apps/details?id=com.nsisp.passportapp',
						icon: 'android',
					},
				]}
			/>
			<Project
				title={'Revival Film Studios'}
				image={'/revival-banner.webp'}
				description={'Custom wordpress theme for Revival Studios with an interactive map showcasing their studios'}
				technologies={'Wordpress, Preact, and Bootstrap'}
				alt={'Revival Film Studios Showcase'}
				links={[{ url: 'https://revivalfilmstudios.ca', icon: 'globe' }]}
			/>
			<Project
				title={'Nova Scotia Seafood'}
				image={'/nsseafood-banner.webp'}
				description={'A Drupal CMS for Nova Scotia Sea Food'}
				technologies={'Drupal and Bootstrap'}
				alt={'Nova Scotia Seafood Showcase'}
				links={[{ url: 'https://nsseafood.com', icon: 'globe' }]}
			/>
			<Project
				title={'Telus Sponsorships'}
				image={'/telus-banner.webp'}
				description={'Sponsorship evaluation tool for Telus'}
				technologies={'Angular and Laravel'}
				alt={'Telus Sponsorship Showcase'}
				links={[{ url: 'https://sponsorships.telus.com', icon: 'globe' }]}
			/>
			<Project
				title={'Arrivals + Departures'}
				image={'/arrivals-banner.webp'}
				description={'CMS site for advertising agency'}
				technologies={'Bolt and Bootstrap'}
				alt={'Arrivals + Departures Showcase'}
				links={[{ url: 'https://arrivalsdepartures.com', icon: 'globe' }]}
			/>
		</ProjectList>
	</section>
	<section>
		<ProjectList title="Projects">
			<Project
				title={'Medenia'}
				image={'medenia-banner.webp'}
				description={'Private server and web client for Dark Ages'}
				technologies={'Phaser, Svelte, and NodeJS'}
				alt={'Medenia Showcase'}
				links={[{ url: 'https://github.com/stevenwithaph/medenia', icon: 'github' }]}
			/>
		</ProjectList>
	</section>
</main>
