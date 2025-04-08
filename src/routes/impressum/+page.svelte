<script lang="ts">
	import { dark, language } from '../ui_store';
</script>

<svelte:head>
	<title>Dalton Blake | Impressum</title>

	<meta
		name="description"
		content="View Dalton Blake’s Impressum for legal information regarding this personal portfolio website, including contact details and relevant disclaimers."
	/>
</svelte:head>

<div class="impressum">
	<h2 style="color: {$dark ? 'var(--darktext)' : 'black'}">Impressum</h2>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		<span style="font-weight: bold; color: {$dark ? 'var(--darktext)' : 'black'};">Name:</span> Dalton
		Blake
	</p>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		<span style="font-weight: bold; color: {$dark ? 'var(--darktext)' : 'black'};">Email:</span>
		<a
			href="mailto:contact@daltonblake.de"
			style="font-weight: 400; color: {$dark ? 'var(--darktext)' : 'black'};"
			>contact@daltonblake.de</a
		>
	</p>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		<span style="font-weight: bold; color: {$dark ? 'var(--darktext)' : 'black'};">Website:</span>
		<a
			href="https://daltonblake.de"
			style="font-weight: 400; color: {$dark ? 'var(--darktext)' : 'black'};"
			target="_blank">daltonblake.de</a
		>
	</p>

	<p class="description" style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			This website is a personal portfolio showcasing my professional experience, projects, and blog
			posts. It does not offer commercial services, collect user data, or allow user submissions.
		{:else if $language == 'DE'}
			Diese Website ist ein persönliches Portfolio, in dem ich meine beruflichen Erfahrungen,
			Projekte und Blogbeiträge präsentiere. Sie bietet keine kommerziellen Dienstleistungen an,
			sammelt keine Nutzerdaten und erlaubt keine Nutzereinsendungen.
		{/if}
	</p>
</div>

<style type="text/css">
	* {
		transition: all 150ms !important;
	}

	.impressum {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		line-height: 1.6;
		margin-bottom: 50px;
	}

	.impressum h2 {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.impressum p {
		font-size: 1rem;
		margin-bottom: 15px;
	}

	.impressum a {
		font-weight: 600;
	}

	.impressum .description {
		margin-top: 15px;
		font-size: 0.9rem;
	}
</style>
