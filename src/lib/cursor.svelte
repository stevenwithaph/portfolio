<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let isVisible = false;

	let coords = spring({ x: 0, y: 0 });

	onMount(() => {
		window.addEventListener('mousemove', initialMouseMove);
	});

	function handleMouseMove(e: MouseEvent) {
		coords.set({ x: e.clientX, y: e.clientY });
	}

	function handleMouseEnter(e: MouseEvent) {
		initCursor(e);
	}

	function handleMouseLeave() {
		isVisible = false;
	}

	function initialMouseMove(e: MouseEvent) {
		initCursor(e);
		window.removeEventListener('mousemove', initialMouseMove);
	}

	function initCursor(e: MouseEvent) {
		isVisible = true;
		coords.set({ x: e.clientX, y: e.clientY }, { hard: true });
	}
</script>

<div
	aria-hidden="true"
	class="fixed top-[-10px] left-[-10px] w-[20px] h-[20px] rounded-full origin-center mix-blend-difference bg-neutral-200 select-none pointer-events-none z-50 transition-opacity"
	style={`transform: translate(${$coords.x}px, ${$coords.y}px); opacity: ${isVisible ? 1 : 0}`}
></div>

<svelte:body
	on:mousemove={handleMouseMove}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
/>
