<script lang="ts">
	import Typewriter from '$lib/typewriter.svelte';
	import Project from '$lib/project.svelte';
	import ProjectList from '$lib/project-list.svelte';
	import Section from '$lib/section.svelte';
	import Experience from '$lib/experience.svelte';
	import Experiences from '$lib/experiences.svelte';
	import Highlight from '$lib/highlight.svelte';
</script>

<section class="py-16 flex items-center">
	<div class="text-center w-full space-y-4">
		<h1 class="text-5xl sm:text-6xl font-bold">
			Hi, I'm
			<Highlight>Steven Adams</Highlight>
		</h1>
		<h2 class="text-4xl font-bold h-[1em]"><Typewriter /></h2>
	</div>
</section>
<Section>
	<p class="md:text-lg text-center m-auto max-w-[100ch]">
		Experienced Full Stack Developer with 4+ years in web development, returning to the technology
		field after military service. Skilled in React, Angular, Node.js, and PHP, with experience
		deploying applications to cloud environments and optimizing system performance. Skilled in
		integrating front-end and back-end technologies to deliver tailored solutions; committed to
		innovation through ongoing personal projects, with experience in game development.
	</p>
</Section>
<div></div>
<Experiences>
	<Experience title={'Freelance Web Developer'} start={'2023'}>
		<ul>
			<li>
				Strategically designing, developing, and maintaining responsive websites tailored to meet
				diverse client needs
			</li>
		</ul>
	</Experience>
	<Experience
		title={'Canadian Armed Forces - Boatswain // Sailor First Class'}
		start={'2019'}
		end={'2023'}
	>
		<ul>
			<li>
				Managed and oversaw shipboard equipment for cargo handling, inter-ship transfers, personnel,
				fuel, and materiel during sea operations.
			</li>
			<li>
				Administered the organization, storage, maintenance, and utilization of small arms,
				demolitions, and ammunition aboard the vessel.
			</li>
		</ul>
	</Experience>
	<Experience title={'Arrivals + Departures - Full Stack Developer'} start={'2016'} end={'2019'}>
		<ul>
			<li>
				Managed a team of juniors to build and optimize key application components using React,
				Angular, Node.js, and PHP.
			</li>
			<li>
				Developed web services and APIs to ensure efficient communication between front-end and
				back-end systems.
			</li>
			<li>
				Deployed applications to cloud environments, configuring server settings for optimal
				performance and reliability.
			</li>
		</ul>
	</Experience>
	<Experience title={'BlueBand Digital - Full Stack Developer'} start={'2015'} end={'2016'}>
		<ul>
			<li>
				Built and optimized key application components using React, Angular, Node.js, and PHP.
			</li>
			<li>
				Developed web services and APIs to ensure efficient communication between front-end and
				back-end systems.
			</li>
			<li>
				Deployed applications to cloud environments, configuring server settings for optimal
				performance and reliability.
			</li>
		</ul>
	</Experience>
	<Experience title={'PlayTaxi Media - Flash Developer'} start={'2014'} end={'2015'}>
		<ul>
			<li>
				Created customized applications and games for various clients, ensuring tailored solutions.
			</li>
			<li>Oversaw cloud deployment and delivery of apps for optimal performance.</li>
			<li>
				Conducted data analysis, resolved performance issues, and continuously monitored system
				health for reliability.
			</li>
		</ul>
	</Experience>
	<Experience title={'Social Games Universe - Flash Developer'} start={'2013'} end={'2014'}>
		<ul>
			<li>
				Implemented game features and core systems, ensuring seamless integration of assets and
				content.
			</li>
			<li>
				Developed game logic and AI algorithms to enhance gameplay dynamics and user engagement.
			</li>
		</ul>
	</Experience>
</Experiences>
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
