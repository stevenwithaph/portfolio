<script lang="ts" context="module">
	export interface ProjectLink {
		icon: string;
		url: string;
	}

	const ROTATION = 2;
	const SCALE = 1.05;

	const DOUBLE_ROTATION = ROTATION * 2;
</script>

<script lang="ts">
	import { spring } from 'svelte/motion';

	export let title: string;
	export let description: string;
	export let image: string;
	export let alt: string;
	export let technologies: string;
	export let links: ProjectLink[];

	const rotate = spring({
		rotateX: 0,
		rotateY: 0,
		scale: 1
	});

	let container: HTMLElement;
	let hover: boolean = false;

	function clamp(current: number, min: number, max: number) {
		return Math.min(Math.max(current, min), max);
	}

	function onMouseMove(event: PointerEvent) {
		if (event.pointerType === 'touch') return;

		hover = true;
		const bounds = container.getBoundingClientRect();
		const x = event.clientX - bounds.left;
		const y = event.clientY - bounds.top;

		const width = container.clientWidth;
		const height = container.clientHeight;

		const rotateX = (x / width) * DOUBLE_ROTATION - ROTATION;
		const rotateY = (y / height) * DOUBLE_ROTATION - ROTATION;

		rotate.set({
			rotateX,
			rotateY,
			scale: SCALE
		});
	}

	function onMouseOut(event: PointerEvent) {
		if (event.pointerType === 'touch') return;

		rotate.set({
			rotateX: 0,
			rotateY: 0,
			scale: 1
		});

		hover = false;
	}
</script>

<div
	class="flex flex-col"
	role="presentation"
	style={`transform:perspective(700px) rotateX(${clamp($rotate.rotateY, -ROTATION, ROTATION)}deg) rotateY(${clamp(-$rotate.rotateX, -ROTATION, ROTATION)}deg) scale(${clamp($rotate.scale, 1, SCALE)})`}
	on:pointermove={onMouseMove}
	on:pointerout={onMouseOut}
	bind:this={container}
>
	<div class="flex-1 flex flex-col p-2 rounded-t border border-zinc-700 bg-zinc-800 space-y-2">
		<h3 class="text-2xl font-bold">{title}</h3>
		<p class="flex-1">
			{@html description}
		</p>
		<p class="font-semibold">
			{@html technologies}
		</p>
		<ul class="space-x-2 text-white font-bold flex flex-row">
			{#each links as link}
				<a
					class="text-shadow transition-shadow hocus:text-green-500 hocus:shadow-green-500 text-2xl"
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
			{alt}
			class:grayscale-0={hover}
			class:grayscale={!hover}
			class="rounded-b"
			src={image}
			width="1024"
			height="768"
		/>
	</div>
</div>
