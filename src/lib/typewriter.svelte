<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	const durationPerCharacter = 100;

	const interval = 2500;

	let index = 0;
	let timeout: number;

	let threshold: number = 0;

	let words: string[] = [
		'Fullstack Developer',
		'Avid Runner',
		'App Developer',
		'CSS Guru',
		'Jack of All Trades',
		'Master of None',
		'Game Developer',
		'NodeJS Expert',
		'Coffee Addict',
		'Wordpress Expert',
		'Drupal Know It All',
	];

	const tween = tweened(words[0], {
		interpolate: (a: string, b: string) => (t: number) => {
			let string = '';
			if (t < threshold) {
				string = a.substring(0, a.length * (1 - t / threshold));
			} else {
				t -= threshold;
				string = b.substring(0, b.length * (t / (1 - threshold)));
			}

			return string;
		},
	});

	function change() {
		const next = words[++index % words.length];

		const totalCharacters = $tween.length + next.length;
		threshold = $tween.length / totalCharacters;

		const spaces = (next.match(' ') || []).length + ($tween.match(' ') || []).length;

		const duration = ($tween.length + next.length - spaces) * durationPerCharacter;

		tween.set(next, {
			duration,
		});

		timeout = setTimeout(change, duration + interval);
	}

	onMount(() => {
		timeout = setTimeout(change, 3000);
	});

	onDestroy(() => {
		clearTimeout(timeout);
	});
</script>

<pre class="inline font-sans whitespace-pre-wrap">{$tween}</pre>
