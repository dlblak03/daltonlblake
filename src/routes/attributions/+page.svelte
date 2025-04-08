<script lang="ts">
	import { dark, language } from '../ui_store';

	let pageTitle =
		$language == 'EN' ? 'Attributions' : $language == 'DE' ? 'Zuschreibungen' : 'Attributions';
</script>

<svelte:head>
	<title>Dalton Blake | {pageTitle}</title>

	<meta
		name="description"
		content="Credit and attribution page for Dalton Blake’s website, acknowledging the tools and resources used, including SvelteKit, Lucide, and others."
	/>
</svelte:head>

<div class="attributions">
	<h2 style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			Attributions
		{:else if $language == 'DE'}
			Zuschreibungen
		{/if}
	</h2>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">SvelteKit</h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			This website uses SvelteKit, which is licensed under the MIT License. SvelteKit is a framework
			for building fast, optimized web applications. It is open-source and available on
		{:else if $language == 'DE'}
			Diese Website verwendet SvelteKit, das unter der MIT-Lizenz lizenziert ist. SvelteKit ist ein
			Framework für die Erstellung schneller, optimierter Webanwendungen. Es ist Open-Source und
			verfügbar auf
		{/if}
		<a
			style="color: {$dark ? 'var(--darktext)' : 'black'}"
			href="https://kit.svelte.dev/"
			target="_blank"
			rel="noopener noreferrer">SvelteKit website</a
		>.
	</p>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			Copyright (c) 2020 <a
			style="color: {$dark ? 'var(--darktext)' : 'black'}"
			href="https://github.com/sveltejs/kit/graphs/contributors"
			target="_blank"
			rel="noopener noreferrer">[these people]</a
		>
		{:else if $language == 'DE'}
			Copyright (c) 2020 <a
			style="color: {$dark ? 'var(--darktext)' : 'black'}"
			href="https://github.com/sveltejs/kit/graphs/contributors"
			target="_blank"
			rel="noopener noreferrer">[these people]</a
		>
		{/if}
	</p>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			View the full MIT License:
		{:else if $language == 'DE'}
			Siehe die vollständige MIT-Lizenz:
		{/if}
		<a
			style="color: {$dark ? 'var(--darktext)' : 'black'}"
			href="https://github.com/sveltejs/kit/blob/master/LICENSE"
			target="_blank"
			rel="noopener noreferrer">MIT License</a
		>.
	</p>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">Lucide</h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			This website uses Lucide, which is licensed under the ISC License. Lucide is a library of
			open-source icons that you can use in your web projects. It is lightweight and customizable.
			You can find more information and the full collection of icons on the
		{:else if $language == 'DE'}
			Diese Website verwendet Lucide, das unter der ISC-Lizenz lizenziert ist. Lucide ist eine
			Bibliothek von Open-Source-Symbolen, die Sie in Ihren Webprojekten verwenden können. Sie ist
			leichtgewichtig und anpassbar. Weitere Informationen und die vollständige Sammlung von Icons
			finden Sie auf der Website
		{/if}
		<a
			style="color: {$dark ? 'var(--darktext)' : 'black'}"
			href="https://lucide.dev/"
			target="_blank"
			rel="noopener noreferrer">Lucide website</a
		>.
	</p>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather
			(MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
		{:else if $language == 'DE'}
			Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather
			(MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
		{/if}
	</p>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			View the full ISC License:
		{:else if $language == 'DE'}
			Siehe die vollständige ISC-Lizenz:
		{/if}
		<a
			style="color: {$dark ? 'var(--darktext)' : 'black'}"
			href="https://github.com/lucide-icons/lucide/blob/main/LICENSE"
			target="_blank"
			rel="noopener noreferrer">ISC License</a
		>.
	</p>
</div>

<style type="text/css">
	.attributions {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		line-height: 1.6;
		margin-bottom: 50px;
	}

	.attributions h2 {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.attributions h3 {
		font-size: 1.5rem;
		margin-top: 30px;
	}

	.attributions p {
		font-size: 1rem;
		margin-bottom: 15px;
		width: 100%;
	}

	.attributions a:hover {
		text-decoration: underline;
	}
</style>
