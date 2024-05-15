<script lang="ts" context="module">
	export interface ProjectLink {
		icon: string;
		url: string;
	}
</script>

<script lang="ts">
	import { spring } from 'svelte/motion';

	export let title: string;
	export let description: string;
	export let image: string;
	export let technologies: string;
	export let links: ProjectLink[];

	const rotate = spring({
		rotateX: 0,
		rotateY: 0,
		scale: 1
	});

	let container: HTMLDivElement;
	let hover: boolean = false;

	function onMouseMove(event: MouseEvent) {
		if (event.target instanceof HTMLElement) {
			hover = true;
			const bounds = container.getBoundingClientRect();
			const x = event.clientX - bounds.left;
			const y = event.clientY - bounds.top;

			const width = container.clientWidth;
			const height = container.clientHeight;

			rotate.set({
				rotateX: (x / width) * 4 - 2,
				rotateY: (y / height) * 4 - 2,
				scale: 1.05
			});
		}
	}

	function onMouseOut() {
		rotate.set({
			rotateX: 0,
			rotateY: 0,
			scale: 1
		});

		hover = false;
	}

	function onTouchEnd(e: TouchEvent) {
		e.preventDefault();
	}
</script>

<div
	class="flex flex-col"
	role="presentation"
	style={`transform:perspective(700px) rotateX(${$rotate.rotateY}deg) rotateY(${-$rotate.rotateX}deg) scale(${$rotate.scale})`}
	on:mousemove={onMouseMove}
	on:mouseout={onMouseOut}
	on:touchend={onTouchEnd}
	on:blur={onMouseOut}
	bind:this={container}
>
	<div
		class="flex-1 flex flex-col p-2 rounded md:rounded-r-none md:rounded-l border border-zinc-700 bg-zinc-800 space-y-2"
	>
		<h2 class="text-2xl font-bold">{title}</h2>
		<p class="flex-1">
			{@html description}
		</p>
		<p class="font-semibold">
			{@html technologies}
		</p>
		<ul class="space-x-2 text-white font-bold flex flex-row">
			{#each links as link}
				<a
					class="relative text-shadow transition-shadow hocus:text-green-500 hocus:shadow-green-500 text-2xl"
					href={link.url}
					target="_blank"
				>
					<li class={`icon-${link.icon}`}></li>
				</a>
			{/each}
		</ul>
	</div>
	<div>
		<img
			alt={'image description'}
			class:grayscale-0={hover}
			class:grayscale={!hover}
			class:rounded={hover}
			src={image}
			width="1024"
			height="768"
		/>
	</div>
</div>
