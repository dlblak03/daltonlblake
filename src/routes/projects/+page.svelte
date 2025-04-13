<script lang="ts">
	import { onMount } from 'svelte';
	import { dark, language } from '../ui_store';
	import { ArrowLeft, ArrowRight, Folder } from 'lucide-svelte';
	import otherProjects from './other-projects.json';

	let pageTitle = $language == 'EN' ? 'Projects' : $language == 'DE' ? 'Projekte' : 'Projects';

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

	let featuredProjects = [
		{
			en: {
				thumbnail: '/golf_generated_image.jpeg',
				name: 'Condor Golf Suite',
				description:
					'An Angular template application to manage a golf course (players, events, tee-sheet, etc.).',
				status: 'Completed',
				link: 'https://github.com/dlblak03/Condor-Golf-Suite'
			},
			de: {
				thumbnail: '/golf_generated_image.jpeg',
				name: 'Condor Golf Suite',
				description:
					'Eine Angular-Template-Anwendung zur Verwaltung eines Golfplatzes (Spieler, Veranstaltungen, Abschlagsliste, etc.).',
				status: 'Abgeschlossen',
				link: 'https://github.com/dlblak03/Condor-Golf-Suite'
			}
		},
		{
			en: {
				thumbnail: '/ktomek.png',
				name: 'Ktomek App',
				description:
					'The Ktomek App is a custom-built web application developed during my time as a self-employed engineer.',
				status: 'Completed',
				link: 'https://github.com/dlblak03/ktomek'
			},
			de: {
				thumbnail: '/ktomek.png',
				name: 'Ktomek Anwendung',
				description:
					'Die Ktomek App ist eine maßgeschneiderte Webanwendung, die ich während meiner Zeit als selbständiger Ingenieur entwickelt habe.',
				status: 'Abgeschlossen',
				link: 'https://github.com/dlblak03/ktomek'
			}
		},
		{
			en: {
				thumbnail: '/favicon.png',
				name: 'This Website',
				description: 'My personal website including my resume, projects, and blog.',
				status: 'In Progress',
				link: 'https://github.com/dlblak03/daltonlblake'
			},
			de: {
				thumbnail: '/favicon.png',
				name: 'Diese Website',
				description:
					'Meine persönliche Website mit meinem Lebenslauf, meinen Projekten und meinem Blog.',
				status: 'In Arbeit',
				link: 'https://github.com/dlblak03/daltonlblake'
			}
		}
	];

	if ($language == 'EN') {
		featuredProjects.sort((project: any, projectTwo: any) => {
			return project.en.name.localeCompare(projectTwo.en.name);
		});
	} else if ($language == 'DE') {
		featuredProjects.sort((project: any, projectTwo: any) => {
			return project.de.name.localeCompare(projectTwo.de.name);
		});
	}

	let otherFoldersEN = [
		'AWS Labs',
		'C# Projects',
		'JavaScript Projects',
		'C & C++ Projects',
		'Java Projects',
		'FreeCodeCamp Projects'
	];
	let otherFoldersDE = [
		'AWS Labs',
		'C# Projekte',
		'JavaScript Projekte',
		'C & C++ Projekte',
		'Java Projekte',
		'FreeCodeCamp Projekte'
	];
	let selectedFolder: string = '';

	otherFoldersEN.sort();
	otherFoldersDE.sort();

	const changeTables = (selected: string, direction: string) => {
		const folders = document.getElementById('folderTable');
		const projects = document.getElementById('projectsTable');

		if (folders && projects && direction == 'left') {
			folders.style.transform = 'translateX(-100%)';
			projects.style.transform = 'translateX(-100%)';
		} else if (folders && projects && direction == 'right') {
			folders.style.transform = 'translateX(0)';
			projects.style.transform = 'translateX(100%)';
		}

		selectedFolder = selected;
	};
</script>

<svelte:head>
	<title>Dalton Blake | {pageTitle}</title>

	<meta
		name="description"
		content="Browse the projects by Dalton Blake, showcasing innovative software applications, UI/UX designs, and development expertise. Explore his work in modern web technologies and creative solutions."
	/>
</svelte:head>

<!-- <div class="coming-soon-container">
	<div class="coming-soon-content">
		<div class="countdown">
			<h2 style="color: {$dark ? "var(--darktext)" : "black"}">
                {#if $language == "EN"}
                    Working on creating content ⏳
                {:else if $language == "DE"}
                    Arbeit an der Erstellung von Inhalten ⏳
                {/if}
            </h2>
		</div>
	</div>
</div> -->

<div class="projects">
	<h2 style="color: {$dark ? 'var(--darktext)' : 'auto'}">
		{#if $language == 'EN'}
			Projects
		{:else if $language == 'DE'}
			Projekte
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
	<h3 class="showcase-title" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
		{#if $language == 'EN'}
			Featured Projects:
		{:else if $language == 'DE'}
			Ausgewählte Projekte:
		{/if}
	</h3>
	<div class="showcase-row">
		{#each featuredProjects as project}
			<div
				class="featured-project-card"
				style="border: solid 1px {$dark ? 'var(--darktext)' : 'var(--primary)'}"
			>
				<img
					src={$language == 'EN' ? project.en.thumbnail : project.de.thumbnail}
					alt="Project Thumbnail"
					class="featured-project-image"
					style="border-bottom: solid 1px {$dark ? 'var(--darktext)' : 'var(--primary)'}"
				/>
				<div
					class="featured-project-content"
					style="display: flex; flex-direction: column; flex-grow: 1;"
				>
					<h3 class="featured-project-title" style="color: {$dark ? 'var(--darktext)' : 'auto'}">
						{$language == 'EN' ? project.en.name : project.de.name}
						{#if project.en.status == 'In Progress' || project.de.status == 'In Arbeit'}
							<div class="pulsating-wrapper"></div>
						{/if}
					</h3>
					<p
						class="featured-project-description"
						style="color: {$dark ? 'var(--darktext)' : 'auto'}"
					>
						{$language == 'EN' ? project.en.description : project.de.description}
					</p>
					<button
						class="primary-button {$dark ? 'dark' : ''}"
						style="color: {$dark
							? 'var(--darktext)'
							: 'var(--primary)'}; padding: 0; height: 35px; margin-top: auto;"
					>
						<a
							href={project.en.link}
							target="_blank"
							style="color: {$dark
								? 'var(--darktext)'
								: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;"
						>
							{#if $language == 'EN'}
								View on GitHub
							{:else if $language == 'DE'}
								Ansicht auf GitHub
							{/if}
						</a>
					</button>
				</div>
			</div>
		{/each}
	</div>
	<h3 class="showcase-title" style="color: {$dark ? 'var(--darktext)' : 'auto'}; margin-top: 35px;">
		{#if $language == 'EN'}
			Other Projects:
		{:else if $language == 'DE'}
			Andere Projekte:
		{/if}
	</h3>
	<div class="other-projects-container">
		<div
			class="other-projects-table slide"
			id="folderTable"
			style="border: solid 1px {$dark ? 'var(--darktext)' : 'var(--primary)'}"
		>
			{#each $language == 'EN' ? otherFoldersEN : otherFoldersDE as folder}
				<button
					class="folder-row {$dark ? 'dark' : ''}"
					style="border-bottom: solid 1px {$dark ? 'var(--darktext)' : 'var(--primary)'}"
					onclick={() => {
						changeTables(folder, 'left');
					}}
				>
					<Folder color={$dark ? 'var(--darktext)' : 'var(--primary)'} strokeWidth="1"></Folder>
					<p
						class="row-text"
						style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'}; font-weight: 500;"
					>
						{folder} ({otherProjects.filter((p) => {
							if ($language == 'EN') return p.en.category == folder;
							else return p.de.category == folder;
						}).length})
					</p>
					<ArrowRight
						style="margin-left: auto"
						color={$dark ? 'var(--darktext)' : 'var(--primary)'}
						strokeWidth="1"
					></ArrowRight>
				</button>
			{/each}
		</div>
		<div
			class="other-projects-table slide hidden"
			id="projectsTable"
			style="border: solid 1px {$dark
				? 'var(--darktext)'
				: 'var(--primary)'}; display: flex; flex-direction: column;"
		>
			<button
				class="go-back-row {$dark ? 'dark' : ''}"
				onclick={() => {
					changeTables('', 'right');
				}}
			>
				<ArrowLeft color={$dark ? 'var(--darktext)' : 'var(--primary)'} strokeWidth="1"></ArrowLeft>
				<p class="row-text" style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'}; font-weight: 500;">
					{selectedFolder} ({otherProjects.filter((p) => {
						if ($language == 'EN') return p.en.category == selectedFolder;
						else if ($language == 'DE') return p.de.category == selectedFolder;
					}).length})
				</p>
			</button>
			<div
				style="display: flex; align-items: center; gap: 15px; flex-wrap: nowrap; padding: 15px 25px; flex-grow: 1; overflow: auto;"
			>
				{#each otherProjects.filter((p: any) => {
					if ($language == 'EN') return p.en.category == selectedFolder;
					else if ($language == 'DE') return p.de.category == selectedFolder;
				}) as project}
					<div
						class="featured-project-card"
						style="border: solid 1px {$dark ? 'var(--darktext)' : 'var(--primary)'}; height: 100%;"
					>
						<img
							src={$language == 'EN' ? project.en.thumbnail : project.de.thumbnail}
							alt="Project Thumbnail"
							class="featured-project-image"
							style="border-bottom: solid 1px {$dark ? 'var(--darktext)' : 'var(--primary)'}"
						/>
						<div
							class="featured-project-content"
							style="height: 100%; display: flex; flex-direction: column;"
						>
							<h3
								class="featured-project-title"
								style="color: {$dark ? 'var(--darktext)' : 'auto'}"
							>
								{$language == 'EN' ? project.en.name : project.de.name}
							</h3>
							<p
								class="featured-project-description"
								style="color: {$dark ? 'var(--darktext)' : 'auto'}"
							>
								{$language == 'EN' ? project.en.description : project.de.description}
							</p>
							<button
								class="primary-button {$dark ? 'dark' : ''}"
								style="color: {$dark
									? 'var(--darktext)'
									: 'var(--primary)'}; padding: 0; height: 35px; margin-top: auto;"
							>
								<a
									href={project.en.link}
									target="_blank"
									style="color: {$dark
										? 'var(--darktext)'
										: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;"
								>
									{#if $language == 'EN'}
										View on GitHub
									{:else if $language == 'DE'}
										Ansicht auf GitHub
									{/if}
								</a>
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
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

	.projects {
		display: flex;
		flex-direction: column;
		padding: 0 75px;
		margin-bottom: 75px;
		overflow: visible;
	}

	.projects > h2 {
		font-size: 1.5rem;
	}

	.showcase-title {
		font-size: 1.125rem;
		font-weight: 500;
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.showcase-row {
		margin-top: 15px;
		display: flex;
		gap: 25px;
		flex-wrap: wrap;
	}

	.featured-project-card {
		width: 250px;
		min-width: 250px;
		max-width: 250px;
		border-radius: 5px;
		overflow: hidden;
		transition: all 150ms;
		display: flex;
		flex-direction: column;
	}

	.featured-project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.featured-project-image {
		width: 100%;
		height: 180px;
		object-fit: cover;
	}

	.featured-project-content {
		padding: 1rem;
	}

	.featured-project-title {
		font-size: 1.25rem;
		margin: 0 0;
		display: flex;
		align-items: center;
	}

	.featured-project-description {
		font-size: 0.95rem;
		margin-bottom: 1rem;
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

	.dark:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.other-projects-container {
		position: relative;
		overflow: hidden;
		flex-wrap: nowrap;
		display: flex;
	}

	.other-projects-table {
		border-radius: 5px;
		margin-top: 15px;
		min-width: calc(100% - 5px);
	}

	.slide {
		transition: all 150ms;
	}

	.hidden {
		transform: translateX(100%);
		z-index: 1;
	}

	.folder-row {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 10px 20px;
		cursor: pointer;
		width: 100%;
		outline: none;
		background: none;
		border: none;
		cursor: pointer;
	}

	.folder-row:hover {
		background: rgba(89, 0, 0, 0.1);
	}

	.go-back-row {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 10px 20px;
		cursor: pointer;
		width: 100%;
		outline: none;
		background: none;
		border: none;
		cursor: pointer;
	}

	.go-back-row:hover {
		background: rgba(89, 0, 0, 0.1);
	}

	.dark:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.folder-row:last-child {
		border-bottom: none !important;
	}

	.row-text {
		font-size: 0.95rem;
	}

	.pulsating-wrapper {
		position: relative;
		min-width: 10px;
		min-height: 10px;
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
			box-shadow: 0 0 0 15px rgba(40, 167, 69, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
		}
	}

	@media (max-width: 1024px) {
		.projects {
			padding: 0 25px;
		}

		.projects > h2 {
			font-size: 1.125rem;
		}

		.showcase-title {
			font-size: 1rem;
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
