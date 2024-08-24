<script lang="ts">
	import Project from '$lib/project.svelte';
	import ProjectList from '$lib/project-list.svelte';
	import Section from '$lib/section.svelte';
	import Experience from '$lib/experience.svelte';
	import Experiences from '$lib/experiences.svelte';
	import Highlight from '$lib/highlight.svelte';
	import Typewriter from '$lib/typewriter.svelte';
</script>

<Section>
	<div class="mt-24">
		<div class="mb-8">
			<h1 class="font-bold">
				Hi, I'm
				<Highlight>Steven Adams</Highlight>
			</h1>
			<h2 class="font-semibold"><Typewriter /></h2>
		</div>
		<p>
			Experienced Full Stack Developer with 4+ years in web development, returning to the technology
			field after military service. Skilled in React, Angular, Node.js, and PHP, with experience
			deploying applications to cloud environments and optimizing system performance. Skilled in
			integrating front-end and back-end technologies to deliver tailored solutions; committed to
			innovation through ongoing personal projects, with experience in game development.
		</p>
	</div>
</Section>
<Experiences>
	<Experience location={'Freelance'} title={'Web Developer'} start={'2023'}>
		<ul class="space-y-2">
			<li>
				Strategically designing, developing, and maintaining responsive websites tailored to meet
				diverse client needs
			</li>
		</ul>
	</Experience>
	<Experience
		location={'Canadian Armed Forces'}
		title={'Boatswain // Sailor First Class'}
		start={'2019'}
		end={'2023'}
	>
		<ul class="space-y-2">
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
	<Experience
		location={'Arrivals + Departures'}
		title={'Full Stack Developer'}
		start={'2016'}
		end={'2019'}
	>
		<ul class="space-y-2">
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
	<Experience
		location={'BlueBand Digital'}
		title={'Full Stack Developer'}
		start={'2015'}
		end={'2016'}
	>
		<ul class="space-y-2">
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
	<Experience location={'Play Taxi Media'} title={'Flash Developer'} start={'2014'} end={'2015'}>
		<ul class="space-y-2">
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
	<Experience
		location={'Social Games Universe'}
		title={'Flash Developer'}
		start={'2013'}
		end={'2014'}
	>
		<ul class="space-y-2">
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
<ProjectList title="Projects">
	<Project
		title={'Dark Ages TS'}
		description={'Private server and web client for Dark Ages written in TypeScript'}
		url={'https://stevenwithaph.github.io/dark-ages-ts/'}
	/>
	<Project
		title={'Wordle Clone'}
		description={'As the name implies, a Wordle clone'}
		url={'https://not-another-wordle-clone.vercel.app'}
	/>
	<Project
		title={'Note Code'}
		description={'Quickly share code snippets'}
		url={'https://note-code-sigma.vercel.app'}
	/>
	<Project
		title={'Portfolio'}
		description={'The source of this portfolio'}
		url={'https://github.com/stevenwithaph/portfolio'}
	/>
</ProjectList>
