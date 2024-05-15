<script lang="ts">
	import '../app.css';

	import Link from '$lib/link.svelte';
	import Typewriter from '$lib/typewriter.svelte';
	import Project from '$lib/project.svelte';
	import ProjectList from '$lib/project-list.svelte';
</script>

<main class="relative max-w-[1440px] mx-auto p-2 space-y-8">
	<nav class="sticky top-2 right-2 z-10">
		<ul class="flex justify-end gap-x-2 text-gray-300 text-xl">
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
				image={'/nsisp-banner.png'}
				description={'Custom social media application akin to Instagram tailored for international students, complemented by an admin panel facilitating seamless content management.'}
				technologies={'React Native and Laravel'}
				alt={'NSISP Showcase'}
				links={[
					{ url: 'https://apps.apple.com/us/app/nsisp-passport-app/id1276287671', icon: 'apple' },
					{
						url: 'https://play.google.com/store/apps/details?id=com.nsisp.passportapp',
						icon: 'android'
					}
				]}
			/>
			<Project
				title={'Revival Film Studios'}
				image={'/revival-banner.png'}
				description={'Crafted CMS solution designed to empower Revival Studios with an interactive map showcasing their studios'}
				technologies={'Wordpress, Preact, Bootstrap'}
				alt={'Revival Film Studios Showcase'}
				links={[{ url: 'https://revivalfilmstudios.ca', icon: 'globe' }]}
			/>
			<Project
				title={'Nova Scotia Seafood'}
				image={'/nsseafood-banner.png'}
				description={"NS Seafood's CMS solution optimizes product showcasing and management"}
				technologies={'Drupal and Bootstrap'}
				alt={'Nova Scotia Seafood Showcase'}
				links={[{ url: 'https://nsseafood.com', icon: 'globe' }]}
			/>
			<Project
				title={'Telus Sponsorships'}
				image={'/telus-banner.png'}
				description={'Tailored sponsorship evaluation tool designed exclusively for Telus, empowering comprehensive assessment of potential sponsorship opportunities'}
				technologies={'Angular and Laravel'}
				alt={'Telus Sponsorship Showcase'}
				links={[{ url: 'https://sponsorships.telus.com', icon: 'globe' }]}
			/>
			<Project
				title={'Arrivals + Departures'}
				image={'/arrivals-banner.png'}
				description={'CMS empowering advertising agency with intuitive content management capabilities'}
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
				image={'medenia-banner.png'}
				description={'Private server and web client dedicated to Dark Ages'}
				technologies={'Phaser, Svelte, and NodeJS'}
				alt={'Medenia Showcase'}
				links={[{ url: 'https://github.com/stevenwithaph/medenia', icon: 'github' }]}
			/>
		</ProjectList>
	</section>
</main>
