<script lang="ts">
	import { onMount } from 'svelte';
	import { dark, language } from '../ui_store';
	import { Check, File, Folder } from 'lucide-svelte';

	let animationPlayState = 'paused';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					// When the element is in view, resume the animation
					if (entry.isIntersecting) {
						animationPlayState = 'running';
						observer.unobserve(entry.target); // Stop observing after the element is running
					}
				});
			},
			{
				threshold: 1 // Trigger the observer when 100% of the element is in the viewport
			}
		);

		const elements = document.querySelectorAll('.divider');
		elements.forEach((element) => {
			observer.observe(element); // Observe each element
		});
	});

	let selectedFolder = '';

	let officialGermanResources = [
		{
			name: 'A2: Deutsch in Alltag und Beruf: Intensivtrainer',
			publisher: 'Klett Sprachen GmbH',
			author: 'Ulrike Moritz, Margret Rodi, Lutz Rohrmann',
			thumbnail: '/german-resources/a2_intensivtrainer.png',
			progress: 13 / 16,
			status: 'active'
		},
		{
			name: 'B1: Deutsch in Alltag und Beruf: Intensivtrainer',
			publisher: 'Klett Sprachen GmbH',
			author: 'Ulrike Moritz, Margret Rodi, Lutz Rohrmann',
			thumbnail: '/german-resources/b1_intensivtrainer.png',
			progress: 8 / 16,
			status: 'active'
		},
		{
			name: 'Fit fürs Zertifikat B1: Deutschprüfung für Erwachsene',
			publisher: 'Hueber Verlag',
			author: 'Johannes Gerbes, Frauke van der Werff',
			thumbnail: '/german-resources/b1_deutsch_pruefung_trainer.png',
			progress: 0 / 1,
			status: 'inactive'
		}
	];

	$: if (selectedFolder == 'german') {
		setTimeout(() => {
			const progressBarObserver = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach((entry) => {
						// When the element is in view, update progress bar width
						if (entry.isIntersecting) {
							const elementObserved: HTMLElement = entry.target as HTMLElement;
							const width = elementObserved.getAttribute('data-width');
							elementObserved.style.width = width + '%';
							observer.unobserve(entry.target); // Stop observing after the element updated
						}
					});
				},
				{
					threshold: 1 // Trigger the observer when 100% of the element is in the viewport
				}
			);

			const progressBars = document.querySelectorAll('.progress-bar');
			progressBars.forEach((progressBar) => {
				progressBarObserver.observe(progressBar); // Observe each element
			});
		}, 50);
	}
</script>

<svelte:head>
	<title>Dalton Blake | Blog</title>

	<meta name="title" content="Dalton Blake | Blog" />
	<meta
		name="description"
		content="Explore Dalton Blake’s blog, where I share insights, experiences, and thoughts on my current events, hobbies, and technology."
	/>
</svelte:head>

<div class="blog">
	<h2 style="color: {$dark ? 'var(--darktext)' : 'auto'}">
		{#if $language == 'EN'}
			Blog
		{:else if $language == 'DE'}
			Blog
		{/if}
	</h2>
	<div class="divider">
		<div
			class="line first-line {$dark ? 'dark-line' : ''}"
			style="animation-play-state: {animationPlayState};"
		></div>
		<div
			class="diagonal {$dark ? 'dark-diagonal' : ''}"
			style="animation-play-state: {animationPlayState};"
		></div>
		<div
			class="line last-line {$dark ? 'dark-line' : ''} grow"
			style="animation-play-state: {animationPlayState};"
		></div>
	</div>
	<div class="folders-row">
		<button
			onclick={() => {
				selectedFolder = 'Books';
			}}
			class="primary-button {$dark ? 'dark' : ''} {selectedFolder == 'Books'
				? $dark
					? 'dark-active'
					: 'active'
				: ''}"
			style="color: {$dark
				? 'var(--darktext)'
				: 'var(--primary)'}; align-items: center; display: flex; gap: 10px;"
		>
			<Folder color={$dark ? 'var(--darktext)' : 'var(--primary)'} strokeWidth="1"></Folder>
			{#if $language == 'EN'}
				Books
			{:else if $language == 'DE'}
				Bücher
			{/if}
		</button>
		<button
			onclick={() => {
				selectedFolder = 'german';
			}}
			class="primary-button {$dark ? 'dark' : ''} {selectedFolder == 'german'
				? $dark
					? 'dark-active'
					: 'active'
				: ''}"
			style="color: {$dark
				? 'var(--darktext)'
				: 'var(--primary)'}; align-items: center; display: flex; gap: 10px;"
		>
			<Folder color={$dark ? 'var(--darktext)' : 'var(--primary)'} strokeWidth="1"></Folder>
			{#if $language == 'EN'}
				German
			{:else if $language == 'DE'}
				Deutsch
			{/if}
		</button>
		<button
			onclick={() => {
				selectedFolder = 'Technology';
			}}
			class="primary-button {$dark ? 'dark' : ''} {selectedFolder == 'Technology'
				? $dark
					? 'dark-active'
					: 'active'
				: ''}"
			style="color: {$dark
				? 'var(--darktext)'
				: 'var(--primary)'}; align-items: center; display: flex; gap: 10px;"
		>
			<Folder color={$dark ? 'var(--darktext)' : 'var(--primary)'} strokeWidth="1"></Folder>
			{#if $language == 'EN'}
				Technology
			{:else if $language == 'DE'}
				Technologie
			{/if}
		</button>
	</div>
	{#if selectedFolder.trim() == ''}
		<div style="display: flex; align-items: center; justify-content: center; flex-grow: 1;">
			<h2 class="mobile-h2" style="color: {$dark ? 'var(--darktext)' : 'black'}">
				{#if $language == 'EN'}
					Select a category to view content
				{:else if $language == 'DE'}
					Wählen Sie eine Kategorie, um den Inhalt anzuzeigen
				{/if}
			</h2>
		</div>
	{:else if selectedFolder.trim() == 'german'}
		<div class="german-learning">
			<h3 class="category-title" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
				{#if $language == 'EN'}
					My Progress:
				{:else if $language == 'DE'}
					Mein Fortschrifft:
				{/if}
			</h3>
			<div style="overflow: auto;">
				<div class="german-progress-bar" style="min-width: 760px;">
					<div class="progress-bar" data-width={(1.5 / 5) * 100 + 2} style="position: absolute;">
						<div
							style="border-radius: 5px; background: {$dark
								? 'rgb(20,20,20)'
								: 'white'}; min-height: 25px; min-width: 25px; border: solid 1px rgb(220,220,220); margin-left: auto; margin-right: -2px; display: flex; align-items: center; justify-content: center;"
						>
							<Check color={$dark ? 'var(--darktext)' : '#28a745'} strokeWidth="2" size="15px"
							></Check>
						</div>
					</div>
					<div class="german-level-label-wrapper">
						<div class="german-level-label" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
							A1
						</div>
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<div
							class="german-level-label-under"
							style="color: {$dark ? 'var(--darktext)' : 'auto'}"
							onclick={() => {
								window.open('/files/A1_Goethe_Certificate.pdf', '_blank');
							}}
						>
							<File color={$dark ? 'var(--darktext)' : '#000'} strokeWidth="2" size="15px"></File>
						</div>
					</div>
					<div class="german-level-label-wrapper">
						<div class="german-level-label" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
							A2
						</div>
					</div>
					<div class="german-level-label-wrapper">
						<div class="german-level-label" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
							B1
						</div>
					</div>
					<div class="german-level-label-wrapper">
						<div class="german-level-label" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
							B2
						</div>
					</div>
					<div class="german-level-label-wrapper">
						<div class="german-level-label" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
							C1
						</div>
					</div>
					<div class="german-level-label-wrapper">
						<div class="german-level-label" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
							C2
						</div>
					</div>
				</div>
			</div>
			<h3 class="category-title" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
				{#if $language == 'EN'}
					Official Resources:
				{:else if $language == 'DE'}
					Offizielle Ressourcen:
				{/if}
			</h3>
			<div class="official-resources-row">
				{#each officialGermanResources as resource}
					<div
						class="resource-card"
						style="border: solid 1px {$dark ? 'var(--darktext)' : 'var(--primary)'}"
					>
						<img
							src={resource.thumbnail}
							alt="Resource Thumbnail"
							class="resource-image"
							style="border-bottom: solid 1px {$dark ? 'var(--darktext)' : 'var(--primary)'}"
						/>
						<div
							class="resource-content"
							style="display: flex; flex-direction: column; flex-grow: 1;"
						>
							<h3 class="resource-title" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
								{resource.name}
								{#if resource.progress != 1 && resource.status != 'inactive'}
									<div class="pulsating-wrapper"></div>
								{/if}
							</h3>
							<p class="resource-description" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
								<b>
									{#if $language == 'EN'}
										Author(s):
									{:else if $language == 'DE'}
										Autor(en):
									{/if}
								</b>
								{resource.author}
							</p>
							<p class="resource-description" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
								<b>
									{#if $language == 'EN'}
										Publisher:
									{:else if $language == 'DE'}
										Verleger:
									{/if}
								</b>
								{resource.publisher}
							</p>
							<div
								style="display: flex; align-items: center; gap: 10px; margin-top: 15px; margin-bottom: 5px;"
							>
								<div class="progress-container">
									<div class="progress-bar" data-width={resource.progress * 100}>
										<div
											style="border-radius: 5px; background: {$dark
												? 'rgb(20,20,20)'
												: 'white'}; min-height: 25px; min-width: 25px; border: solid 1px rgb(220,220,220); margin-left: auto; margin-right: -2px; display: flex; align-items: center; justify-content: center;"
										>
											<Check
												color={$dark ? 'var(--darktext)' : '#28a745'}
												strokeWidth="2"
												size="15px"
											></Check>
										</div>
									</div>
								</div>
								<p style="color: {$dark ? 'var(--darktext)' : 'auto'}; margin: 0;">
									{resource.progress * 100}%
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{:else if selectedFolder.trim() == 'Books'}
		<div style="display: flex; align-items: center; justify-content: center; flex-grow: 1;">
			<h2 class="mobile-h2" style="color: {$dark ? 'var(--darktext)' : 'black'}">
				{#if $language == 'EN'}
					Working on creating content ⏳
				{:else if $language == 'DE'}
					Arbeit an der Erstellung von Inhalten ⏳
				{/if}
			</h2>
		</div>
	{:else if selectedFolder.trim() == 'Technology'}
		<div style="display: flex; align-items: center; justify-content: center; flex-grow: 1;">
			<h2 class="mobile-h2" style="color: {$dark ? 'var(--darktext)' : 'black'}">
				{#if $language == 'EN'}
					Working on creating content ⏳
				{:else if $language == 'DE'}
					Arbeit an der Erstellung von Inhalten ⏳
				{/if}
			</h2>
		</div>
	{/if}
</div>

<style type="text/css">
	/* .coming-soon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		flex-direction: column;
	}

	.coming-soon-content {
		padding: 30px;
		max-width: 800px;
	} */

	.german-progress-bar {
		display: flex;
		align-items: center;
		border: solid 1px rgb(220, 220, 220);
		border-radius: 5px;
		height: 10px;
		margin-top: 70px;
		margin-bottom: 85px;
		position: relative;
	}

	.german-level-label-wrapper {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 45px;
	}

	.german-level-label-wrapper:last-child {
		flex-grow: 0;
	}

	.german-level-label {
		border-radius: 5px;
		border: solid 1px rgb(220, 220, 220);
		width: fit-content;
		padding: 10px 15px;
		margin-top: -60px;
		font-weight: bold;
	}

	.german-level-label-under {
		border-radius: 5px;
		border: solid 1px rgb(220, 220, 220);
		width: fit-content;
		padding: 10px 15px;
		margin-bottom: -60px;
		font-weight: bold;
		cursor: pointer;
	}

	.folders-row {
		display: flex;
		align-items: center;
		gap: 15px;
		flex-wrap: wrap;
	}

	.german-learning {
		margin-top: 25px;
		display: flex;
		flex-direction: column;
		margin-bottom: 75px;
		overflow: visible;
	}

	.category-title {
		font-size: 1.125rem;
		font-weight: 500;
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.official-resources-row {
		margin-top: 15px;
		display: flex;
		gap: 25px;
		flex-wrap: wrap;
	}

	.resource-card {
		width: 275px;
		min-width: 275px;
		max-width: 275px;
		border-radius: 5px;
		overflow: hidden;
		transition: all 150ms;
		display: flex;
		flex-direction: column;
	}

	.resource-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.resource-image {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}

	.resource-content {
		padding: 1rem;
	}

	.resource-title {
		font-size: 1.25rem;
		margin: 0 0;
		display: flex;
		align-items: center;
	}

	.resource-description {
		font-size: 0.95rem;
		margin-bottom: 0;
	}

	.progress-container {
		border: solid 1px rgb(220, 220, 220);
		border-radius: 5px;
		height: 10px;
		flex-grow: 1;
	}

	.progress-bar {
		display: flex;
		align-items: center;
		overflow: visible;
		width: 0;
		height: 10px;
		transition: all 300ms;
		background: #28a745;
		border-radius: 5px;
	}

	@media (max-width: 1024px) {
		.category-title {
			font-size: 1rem;
		}
	}

	.pulsating-wrapper {
		position: relative;
		min-width: 5px;
		min-height: 5px;
		background-color: #28a745;
		border-radius: 50%;
		animation: pulse 1.5s infinite;
		margin: 1rem;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
		}
		70% {
			box-shadow: 0 0 0 7px rgba(40, 167, 69, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
		}
	}

	.primary-button {
		background: none;
		outline: 0;
		border: none;
		cursor: pointer;
		font-size: 14px;
		padding: 10px 10px;
		border-radius: 5px;
	}

	.primary-button:hover {
		background: rgba(89, 0, 0, 0.1);
	}

	.active {
		background: rgba(89, 0, 0, 0.1);
	}

	.dark:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.dark-active {
		background: rgba(255, 255, 255, 0.1);
	}

	.blog {
		display: flex;
		flex-direction: column;
		padding: 0 75px;
		margin-bottom: 75px;
		overflow: visible;
		flex-grow: 1;
	}

	.blog > h2 {
		font-size: 1.5rem;
	}

	@media (max-width: 1024px) {
		.blog {
			padding: 0 25px;
		}

		.blog > h2 {
			font-size: 1.125rem;
		}

		.mobile-h2 {
			font-size: 1.125rem;
		}
	}

	.divider {
		display: flex;
		height: 15px;
	}

	.line {
		background: var(--primary);
		height: 1px;
		margin-top: 6px;
		margin-right: 3px;
	}

	.first-line {
		width: 0;
		animation: slide-in-left 0.5s ease-out forwards;
		animation-delay: 0s !important;
		animation-play-state: paused;
	}

	.last-line {
		margin-left: 100%;
		animation: slide-in-right 0.5s ease-out forwards;
		animation-play-state: paused;
	}

	.dark-line {
		background: var(--darktext);
	}

	.diagonal {
		background: var(--primary);
		width: 1px;
		height: 0;
		transform: rotate(45deg);
		margin-left: -7px;
		margin-top: -3px;
		animation: drop-down 0.25s ease-out forwards;
		animation-delay: 0.5s;
		animation-play-state: paused;
	}

	.dark-diagonal {
		background: var(--darktext);
	}

	.line.grow {
		flex-grow: 1;
		margin-top: 2px;
	}

	@keyframes slide-in-left {
		from {
			width: 0;
		}
		to {
			width: 500px;
		}
	}

	@media (max-width: 1024px) {
		@keyframes slide-in-left {
			from {
				width: 0;
			}
			to {
				width: 300px;
			}
		}
	}

	@media (max-width: 500px) {
		@keyframes slide-in-left {
			from {
				width: 0;
			}
			to {
				width: 180px;
			}
		}
	}

	@keyframes drop-down {
		from {
			height: 0;
			margin-left: 5px;
		}
		to {
			height: 100%;
			margin-left: -2px;
		}
	}

	@keyframes slide-in-right {
		from {
			margin-left: 100%;
		}
		to {
			margin-left: 1px;
		}
	}
</style>
