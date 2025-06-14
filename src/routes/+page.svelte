<script lang="ts">
	import { onMount } from 'svelte';
	import { dark, language } from './ui_store';

	let pageTitle = $language == 'EN' ? 'Resume' : $language == 'DE' ? 'Lebenslauf' : 'Resume';

	let weAnimationPlayState = 'paused';
	let edAnimationPlayState = 'paused';
	let ceAnimationPlayState = 'paused';
	let coAnimationPlayState = 'paused';

	onMount(() => {
		const weObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					// When the element is in view, resume the animation
					if (entry.isIntersecting) {
						weAnimationPlayState = 'running';
						observer.unobserve(entry.target); // Stop observing after the element is running
					}
				});
			},
			{
				threshold: 1 // Trigger the observer when 100% of the element is in the viewport
			}
		);

		const edObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					// When the element is in view, resume the animation
					if (entry.isIntersecting) {
						edAnimationPlayState = 'running';
						observer.unobserve(entry.target); // Stop observing after the element is running
					}
				});
			},
			{
				threshold: 1 // Trigger the observer when 100% of the element is in the viewport
			}
		);

		const ceObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					// When the element is in view, resume the animation
					if (entry.isIntersecting) {
						ceAnimationPlayState = 'running';
						observer.unobserve(entry.target); // Stop observing after the element is running
					}
				});
			},
			{
				threshold: 1 // Trigger the observer when 100% of the element is in the viewport
			}
		);

		const coObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					// When the element is in view, resume the animation
					if (entry.isIntersecting) {
						coAnimationPlayState = 'running';
						observer.unobserve(entry.target); // Stop observing after the element is running
					}
				});
			},
			{
				threshold: 1 // Trigger the observer when 100% of the element is in the viewport
			}
		);

		const weElements = document.querySelectorAll('.we-divider');
		weElements.forEach((element) => {
			weObserver.observe(element); // Observe each element
		});

		const edElements = document.querySelectorAll('.ed-divider');
		edElements.forEach((element) => {
			edObserver.observe(element); // Observe each element
		});

		const ceElements = document.querySelectorAll('.ce-divider');
		ceElements.forEach((element) => {
			ceObserver.observe(element); // Observe each element
		});

		const coElements = document.querySelectorAll('.co-divider');
		coElements.forEach((element) => {
			coObserver.observe(element); // Observe each element
		});
	});
</script>

<svelte:head>
	<title>Dalton Blake | {pageTitle}</title>

	<meta name="title" content="Dalton Blake | {pageTitle}" />
	<meta
		name="description"
		content="Explore the portfolio of Dalton Blake, an aspiring software engineer. Learn about his professional experience, projects, and certifications in software development."
	/>
</svelte:head>

<!-- Hero  -->
<div class="hero-container">
	<div class="content">
		<h1 class="title {$dark ? 'dark-text' : 'normal-text'}">Dalton Blake</h1>
		<div class="social-links">
			<a
				href="https://www.linkedin.com/in/daltonblake05/"
				target="_blank"
				aria-label="LinkedIn Profile"
			>
				<i class="fab fa-linkedin fa-xl"></i>
			</a>
			<a href="https://github.com/dlblak03" target="_blank" aria-label="GitHub Profile">
				<i class="fab fa-github fa-xl"></i>
			</a>
			<a href="https://www.xing.com/profile/Dalton_Blake" target="_blank" aria-label="Xing Profile">
				<i class="fab fa-xing fa-xl"></i>
			</a>
		</div>
		<p class="description {$dark ? 'dark-text' : 'normal-text'}">
			{#if $language == 'EN'}
				Heyo, I’m Dalton, aspiring software engineer dedicated to building modern, intuitive
				applications.
			{:else if $language == 'DE'}
				Hallo, ich bin Dalton, ein angehender Softwareingenieur, der sich der Entwicklung moderner,
				intuitiver Anwendungen widmet.
			{/if}
		</p>
	</div>
	<div class="image-space">
		<div class="inner-image-space">
			<div class="image-background"></div>
			<img
				class="mobile-image hero-image"
				src="/other/professional-photo.webp"
				alt="Professional"
				width="300"
				height="400"
			/>
		</div>
	</div>
</div>

<!-- Work Experience  -->
<div class="work-experience">
	<h2 class={$dark ? 'dark-text' : 'normal-text'}>
		{#if $language == 'EN'}
			Work Experience
		{:else if $language == 'DE'}
			Berufserfahrung
		{/if}
	</h2>
	<div class="we-divider">
		<div
			class="line first-line {$dark ? 'dark-line' : ''}"
			style="animation-play-state: {weAnimationPlayState};"
		></div>
		<div
			class="diagonal {$dark ? 'dark-diagonal' : ''}"
			style="animation-play-state: {weAnimationPlayState};"
		></div>
		<div
			class="line last-line {$dark ? 'dark-line' : ''} grow"
			style="animation-play-state: {weAnimationPlayState};"
		></div>
	</div>

	<!-- Software Developer · Software Vectors, LLC -->
	<div class="job-container">
		<div class="job-header">
			<div class="job-info {$dark ? 'dark-job-info' : ''}">
				<h3>
					{#if $language == 'EN'}
						Software Developer
					{:else if $language == 'DE'}
						Software-Entwickler
					{/if}
				</h3>
				<p class="company">Software Vectors, LLC · Solingen, DE (Remote)</p>
			</div>
			<div class="job-dates {$dark ? 'dark-job-dates' : ''}">
				<time datetime="2025-06">06.2025</time> - Present
			</div>
		</div>
		<ul class={$dark ? 'dark-job-description' : ''}>
			<li>
				{#if $language == 'EN'}
					Designing intuitive UI/UX and developing robust, user-centric software solutions. Responsible for the full development cycle, from interface design to backend implementation, ensuring seamless user experiences and scalable performance.
					
					Via Remote.com.
				{:else if $language == 'DE'}
					Entwurf intuitiver UI/UX und Entwicklung robuster, benutzerorientierter Softwarelösungen. Verantwortlich für den gesamten Entwicklungszyklus, vom Schnittstellendesign bis zur Backend-Implementierung, um nahtlose Benutzererlebnisse und skalierbare Leistung zu gewährleisten.
					
					Über Remote.com.
				{/if}
			</li>
		</ul>
	</div>

	<!-- Software Engineer · Ktomek LLC -->
	<div class="job-container">
		<div class="job-header">
			<div class="job-info {$dark ? 'dark-job-info' : ''}">
				<h3>
					{#if $language == 'EN'}
						Software Engineer
					{:else if $language == 'DE'}
						Software-Ingenieur
					{/if}
				</h3>
				<p class="company">Ktomek LLC · Shelbyville, KY</p>
			</div>
			<div class="job-dates {$dark ? 'dark-job-dates' : ''}">
				<time datetime="2022-08">08.2022</time> - <time datetime="2024-07">07.2024</time>
			</div>
		</div>
		<ul class={$dark ? 'dark-job-description' : ''}>
			<li>
				{#if $language == 'EN'}
					Designed and developed customer applications by leveraging creative and software
					engineering expertise.
				{:else if $language == 'DE'}
					Entwurf und Entwicklung von Kundenanwendungen durch den Einsatz von kreativem und
					softwaretechnischem Fachwissen.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Led a two-person development team on an internal software project, applying project
					management and leadership skills.
				{:else if $language == 'DE'}
					Leitung eines zweiköpfigen Entwicklungsteams für ein internes Softwareprojekt unter
					Anwendung von Projektmanagement- und Führungsfähigkeiten.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Built a SvelteKit-based application for seamless integration into custom HTML websites,
					enabling management of website images, SEO, keywords, user profiles, and custom
					application requests.
				{:else if $language == 'DE'}
					Entwicklung einer SvelteKit-basierten Anwendung zur nahtlosen Integration in
					benutzerdefinierte HTML-Websites, die die Verwaltung von Website-Bildern, SEO,
					Schlüsselwörtern, Benutzerprofilen und benutzerdefinierten Anwendungsanforderungen
					ermöglicht.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Facilitated enterprise contract acquisition by strengthening the B2B relationship with a
					nationally recognized client through innovative UI/UX design and application development.
				{:else if $language == 'DE'}
					Erleichterte die Akquisition von Unternehmensverträgen durch Stärkung der B2B-Beziehung
					mit einem national anerkannten Kunden durch innovatives UI/UX-Design und
					Anwendungsentwicklung.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Developed a Kanban-style dashboard with dynamic workflows, optimizing data management
					efficiency for agencies.
				{:else if $language == 'DE'}
					Entwicklung eines Dashboards im Kanban-Stil mit dynamischen Workflows, das die Effizienz
					der Datenverwaltung für Agenturen optimiert.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Developed a column behavior tracker to monitor and analyze individual behaviors,
					identifying patterns and trends to support data-driven decision-making.
				{:else if $language == 'DE'}
					Entwicklung eines Verhaltenstrackers für Spalten zur Überwachung und Analyse des
					individuellen Verhaltens, Identifizierung von Mustern und Trends zur Unterstützung einer
					datengestützten Entscheidungsfindung.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Enhanced brand visibility and increased lead generation for two Texas-based clients
					through strategic design and development.
				{:else if $language == 'DE'}
					Verbesserte Markensichtbarkeit und erhöhte Lead-Generierung für zwei in Texas ansässige
					Kunden durch strategisches Design und Entwicklung.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Built a monday.com workspace template to track and manage invoices, contracts, work items,
					contractors, work orders, timesheet items, and projects, ensuring all elements were
					interconnected for greater efficiency.
				{:else if $language == 'DE'}
					Erstellung einer monday.com-Arbeitsplatzvorlage zur Verfolgung und Verwaltung von
					Rechnungen, Verträgen, Arbeitsaufgaben, Arbeitsaufträgen, Zeiterfassungselementen und
					Projekten, wobei alle Elemente miteinander verbunden sind, um die Effizienz zu steigern.
				{/if}
			</li>
		</ul>
	</div>

	<!-- Software Developer · Oasis Technologies Group LLC -->
	<div class="job-container">
		<div class="job-header">
			<div class="job-info {$dark ? 'dark-job-info' : ''}">
				<h3>
					{#if $language == 'EN'}
						Software Developer
					{:else if $language == 'DE'}
						Software-Entwickler
					{/if}
				</h3>
				<p class="company">Oasis Technologies Group LLC · New Albany, IN</p>
			</div>
			<div class="job-dates {$dark ? 'dark-job-dates' : ''}">
				<time datetime="2020-10">10.2020</time> - <time datetime="2022-08">08.2022</time>
			</div>
		</div>
		<ul class={$dark ? 'dark-job-description' : ''}>
			<li>
				{#if $language == 'EN'}
					Defined software specifications for small-scale projects to establish precise development
					guidelines.
				{:else if $language == 'DE'}
					Definition von Softwarespezifikationen für kleinere Projekte zur Festlegung genauer
					Entwicklungsrichtlinien.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Diagnosed and resolved application issues by leveraging programming expertise.
				{:else if $language == 'DE'}
					Diagnose und Lösung von Anwendungsproblemen durch Nutzung von Programmierkenntnissen.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Led the UI design and implementation of a comprehensive application that streamlined and
					tracked processes from initiation to completion within pharmaceutical facilities.
				{:else if $language == 'DE'}
					Leitete das UI-Design und die Implementierung einer umfassenden Anwendung, mit der
					Prozesse von der Einleitung bis zum Abschluss in pharmazeutischen Einrichtungen
					rationalisiert und verfolgt werden konnten.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Developed key applications, including data dashboards, patient management tools, a company
					configuration system, a medication administration record system, and a front-end CSS
					framework for UI components.
				{:else if $language == 'DE'}
					Entwicklung von Schlüsselanwendungen, darunter Daten-Dashboards,
					Patientenmanagement-Tools, ein Unternehmenskonfigurationssystem, ein
					Medikamentenverwaltungssystem und ein Front-End-CSS-Framework für UI-Komponenten.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Optimized database queries to support UI functionality using SQL expertise.
				{:else if $language == 'DE'}
					Optimierte Datenbankabfragen zur Unterstützung der UI-Funktionalität mit Hilfe von
					SQL-Kenntnissen.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Accelerated company-wide development by implementing a unified UI framework with C#.
				{:else if $language == 'DE'}
					Beschleunigte die unternehmensweite Entwicklung durch die Implementierung eines
					einheitlichen UI-Frameworks mit C#.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Improved customer service by efficiently managing support tickets and providing technical
					assistance.
				{:else if $language == 'DE'}
					Verbesserter Kundenservice durch effiziente Verwaltung von Support-Tickets und
					Bereitstellung technischer Unterstützung.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Reduced development timelines through a C# dynamic HTML generator paired with a custom CSS
					solution.
				{:else if $language == 'DE'}
					Verkürzte Entwicklungszeiten durch einen dynamischen HTML-Generator in C# gepaart mit
					einer kundenspezifischen CSS Lösung.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Designed and implemented a medication administration system to streamline processes for
					nursing staff in healthcare and correctional environments.
				{:else if $language == 'DE'}
					Entwicklung und Implementierung eines Systems zur Medikamentenverwaltung, um die Prozesse
					für das Pflegepersonal im Gesundheitswesen und in Justizvollzugsanstalten zu optimieren.
				{/if}
			</li>
		</ul>
	</div>

	<!-- Software Developer Intern · ahatis -->
	<div class="job-container">
		<div class="job-header">
			<div class="job-info {$dark ? 'dark-job-info' : ''}">
				<h3>
					{#if $language == 'EN'}
						Software Developer Intern
					{:else if $language == 'DE'}
						Software-Entwickler Praktikant
					{/if}
				</h3>
				<p class="company">ahatis · San Ramon, CA (Remote)</p>
			</div>
			<div class="job-dates {$dark ? 'dark-job-dates' : ''}">
				<time datetime="2020-01">01.2020</time> - <time datetime="2020-05">05.2020</time>
			</div>
		</div>
		<ul class={$dark ? 'dark-job-description' : ''}>
			<li>
				{#if $language == 'EN'}
					Observed and learned how to rebase an application between AWS accounts under the guidance
					of an AWS Solutions Architect.
				{:else if $language == 'DE'}
					Beobachtete und lernte, wie eine Anwendung unter der Anleitung eines AWS Solutions
					Architects zwischen AWS-Konten umbasiert wird.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Collaborated with a senior developer to build key application components, including an AWS
					Step Functions state machine.
				{:else if $language == 'DE'}
					Zusammenarbeit mit einem leitenden Entwickler bei der Erstellung wichtiger
					Anwendungskomponenten, einschließlich einer AWS Step Functions-Zustandsmaschine.
				{/if}
			</li>
			<li>
				{#if $language == 'EN'}
					Engaged in Angular training to enhance front-end development skills and contribute to UI
					components.
				{:else if $language == 'DE'}
					Teilnahme an einer Angular-Schulung, um die Fähigkeiten in der Front-End-Entwicklung zu
					verbessern und zu den UI-Komponenten beizutragen.
				{/if}
			</li>
		</ul>
	</div>

	<!-- More experiences  -->
	<div class="job-container">
		<a
			class="primary-button a-button {$dark ? 'dark' : ''} {$dark ? 'dark-text' : 'primary-text'}"
			href="https://www.linkedin.com/in/daltonblake05/"
			target="_blank"
			aria-label="LinkedIn profile"
		>
			{#if $language == 'EN'}
				Plus four more work experiences
			{:else if $language == 'DE'}
				Vier weitere Berufserfahrungen
			{/if}
		</a>
	</div>
</div>

<!-- Education  -->
<div class="education">
	<h2 class={$dark ? 'dark-text' : 'normal-text'}>
		{#if $language == 'EN'}
			Education
		{:else if $language == 'DE'}
			Ausbildung
		{/if}
	</h2>
	<div class="ed-divider">
		<div
			class="line first-line {$dark ? 'dark-line' : ''}"
			style="animation-play-state: {edAnimationPlayState};"
		></div>
		<div
			class="diagonal {$dark ? 'dark-diagonal' : ''}"
			style="animation-play-state: {edAnimationPlayState};"
		></div>
		<div
			class="line last-line {$dark ? 'dark-line' : ''} grow"
			style="animation-play-state: {edAnimationPlayState};"
		></div>
	</div>

	<!-- Bachelor of Science · University of Louisville -->
	<div class="degree-container">
		<div class="degree-header">
			<div class="degree-info {$dark ? 'dark-degree-info' : ''}">
				<h3>University of Louisville</h3>
				<p class="degree">Bachelor of Science in Computer Science & Engineering</p>
				<p class="degree">
					Louisville, KY ·
					{#if $language == 'EN'}
						Officially recognized in DE
					{:else if $language == 'DE'}
						Anerkannt in DE
					{/if}
				</p>
			</div>
			<div class="degree-dates {$dark ? 'dark-degree-dates' : ''}">
				<time datetime="2018-08">08.2018</time> - <time datetime="2022-05">05.2022</time>
			</div>
		</div>
	</div>

	<!-- Master of Science · Fachhochschule Südwestfalen -->
	
</div>

<!-- Certifications  -->
<div class="certifications">
	<h2 class={$dark ? 'dark-text' : 'normal-text'}>
		{#if $language == 'EN'}
			Certifications
		{:else if $language == 'DE'}
			Zertifizierungen
		{/if}
	</h2>
	<div class="ce-divider">
		<div
			class="line first-line {$dark ? 'dark-line' : ''}"
			style="animation-play-state: {ceAnimationPlayState};"
		></div>
		<div
			class="diagonal {$dark ? 'dark-diagonal' : ''}"
			style="animation-play-state: {ceAnimationPlayState};"
		></div>
		<div
			class="line last-line {$dark ? 'dark-line' : ''} grow"
			style="animation-play-state: {ceAnimationPlayState};"
		></div>
	</div>

	<!-- Certified Agile Leader 1 · Scrum Alliance -->
	<div class="certification-container">
		<div class="certification-header">
			<div class="certification-info {$dark ? 'dark-certification-info' : ''}">
				<h3>Certified Agile Leader® 1 (CAL 1™)</h3>
				<p class="certification">Scrum Alliance</p>
			</div>
			<div class="certification-badge">
				<a href="https://bcert.me/sqalzkqmt" target="_blank" aria-label="CAL 1™ Badge">
					<img
						class="mobile-badge badge"
						src="/badges/cal-1-badge.webp"
						alt="CAL 1™ Badge"
						height="75"
						width="75"
					/>
				</a>
			</div>
		</div>
	</div>

	<!-- Certified Scrum Developer · Scrum Alliance -->
	<div class="certification-container">
		<div class="certification-header">
			<div class="certification-info {$dark ? 'dark-certification-info' : ''}">
				<h3>Certified Scrum Developer® (CSD®)</h3>
				<p class="certification">Scrum Alliance</p>
			</div>
			<div class="certification-badge">
				<a href="https://bcert.me/sendfcmxe" target="_blank" aria-label="CSD® Badge">
					<img
						class="mobile-badge badge"
						src="/badges/csd-badge.webp"
						alt="CSD® Badge"
						height="75"
						width="75"
					/>
				</a>
			</div>
		</div>
	</div>

	<!-- More certifications  -->
	<div class="certification-container">
		<a
			class="primary-button a-button {$dark ? 'dark' : ''} {$dark ? 'dark-text' : 'primary-text'}"
			href="https://www.linkedin.com/in/daltonblake05/"
			target="_blank"
			aria-label="LinkedIn profile"
		>
			{#if $language == 'EN'}
				Plus five more certifications
			{:else if $language == 'DE'}
				Fünf weitere Zertifizierungen
			{/if}
		</a>
	</div>
</div>

<!-- Contact  -->
<div class="contact">
	<h2 class={$dark ? 'dark-text' : 'normal-text'}>
		{#if $language == 'EN'}
			Contact
		{:else if $language == 'DE'}
			Kontakt
		{/if}
	</h2>
	<div class="co-divider">
		<div
			class="line first-line {$dark ? 'dark-line' : ''}"
			style="animation-play-state: {coAnimationPlayState};"
		></div>
		<div
			class="diagonal {$dark ? 'dark-diagonal' : ''}"
			style="animation-play-state: {coAnimationPlayState};"
		></div>
		<div
			class="line last-line {$dark ? 'dark-line' : ''} grow"
			style="animation-play-state: {coAnimationPlayState};"
		></div>
	</div>

	<!-- Email -->
	<div class="contact-container">
		<div class="contact-header">
			<div class="contact-info {$dark ? 'dark-contact-info' : ''}">
				<p class="contact-data">
					<b>Email:</b>
					<a
						href="mailto:contact@daltonblake.de"
						class={$dark ? 'dark-text' : 'normal-text'}
						>contact@daltonblake.de</a
					>
				</p>
			</div>
		</div>
	</div>

	<!-- Social Media Links -->
	<div class="contact-container">
		<div class="contact-header">
			<div class="contact-info {$dark ? 'dark-contact-info' : ''}">
				<div class="contact-data-icons">
					<a
						href="https://www.linkedin.com/in/daltonblake05/"
						target="_blank"
						aria-label="Linkedin profile"
					>
						<i
							class="fab fa-linkedin fa-xl {$dark ? 'dark-text' : 'primary-text'}"
						></i>
					</a>
					<a
						href="https://github.com/dlblak03"
						target="_blank"
						aria-label="Github profile"
					>
						<i
							class="fab fa-github fa-xl {$dark ? 'dark-text' : 'primary-text'}"
						></i>
					</a>
					<a
						href="https://www.xing.com/profile/Dalton_Blake"
						target="_blank"
						aria-label="Xing profile"
					>
						<i
							class="fab fa-xing fa-xl {$dark ? 'dark-text' : 'primary-text'}"
						></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style type="text/css">
	@keyframes slide-in-left {
		0% {
			width: 0;
		}

		to {
			width: 500px;
		}
	}

	@keyframes drop-down {
		0% {
			height: 0;
			margin-left: 5px;
		}

		to {
			height: 100%;
			margin-left: -2px;
		}
	}

	@keyframes slide-in-right {
		0% {
			margin-left: 100%;
		}

		to {
			margin-left: 1px;
		}
	}

	.dark-text {
		color: var(--darktext) !important;
	}

	.normal-text {
		color: #000000;
	}

	.primary-text {
		color: var(--primary);
	}

	.a-button {
		text-decoration: none;
		width: calc(100% - 20px);
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
		font-size: 12px;
	}

	.hero-container {
		display: flex;
		align-items: center;
		min-height: calc(100vh - 70px);
		height: fit-content;
		padding: 0 75px;
	}

	.content {
		display: flex;
		flex-direction: column;
		width: 50%;
	}

	.title {
		font-size: 4rem;
		margin-bottom: 20px;
		color: var(--text-color);
	}

	.social-links {
		display: flex;
		align-items: center;
		width: fit-content;
		height: 35px;
		background: var(--primary);
		gap: 15px;
		padding: 10px 15px;
		border-radius: 5px;
	}

	.social-links a i {
		color: var(--darktext) !important;
	}

	.description {
		margin-top: 100px;
		font-size: 1.25rem;
		color: var(--text-color);
	}

	.image-space {
		width: 50%;
		justify-content: center;
		display: flex;
		position: relative;
	}

	.inner-image-space {
		display: flex;
		position: relative;
	}

	.image-background {
		position: absolute;
		left: -25px;
		top: -25px;
		border-radius: 5px;
		background: #7a0000;
		height: 100%;
		width: 100%;
		z-index: 1;
	}

	@media (max-width: 1024px) {
		.hero-container {
			min-height: calc(100vh - 70px);
			align-items: start;
			flex-direction: column;
			padding: 0 35px 100px;
		}

		.title {
			font-size: 2.5rem;
		}

		.description {
			font-size: 1.125rem;
		}

		.content {
			width: 100%;
		}

		.image-space {
			width: 100%;
			padding: 50px 0;
		}

		.hero-container {
			padding-bottom: 200px;
		}
	}

	.hero-image {
		z-index: 2;
		border-radius: 5px;
		box-shadow:
			0 4px 8px rgba(0, 0, 0, 0.2),
			0 6px 16px rgba(0, 0, 0, 0.1);
		width: 300px;
		height: 400px;
	}

	@media (max-width: 500px) {
		.mobile-image {
			width: 225px;
			height: 300px;
		}
	}

	.primary-button {
		background: 0 0;
		outline: 0;
		border: 0;
		cursor: pointer;
		font-size: 14px;
		padding: 10px;
		border-radius: 5px;
	}

	.primary-button:hover {
		background: rgba(89, 0, 0, 0.1);
	}

	.dark:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.work-experience {
		padding: 0 75px;
	}

	.education,
	.work-experience {
		display: flex;
		flex-direction: column;
		margin-bottom: 75px;
	}

	.certifications {
		padding: 0 75px;
	}

	.certifications,
	.contact {
		display: flex;
		flex-direction: column;
		margin-bottom: 75px;
	}

	@media (max-width: 1024px) {
		.certifications,
		.contact,
		.education,
		.work-experience {
			padding: 0 25px !important;
		}

		.certifications > h2,
		.contact > h2,
		.education > h2,
		.work-experience > h2 {
			font-size: 1.125rem;
		}
	}

	.education {
		padding: 0 75px 25px;
	}

	.contact {
		padding: 0 75px 50px;
	}

	.ce-divider,
	.co-divider,
	.ed-divider,
	.we-divider {
		display: flex;
		height: 15px;
	}

	.line {
		background: var(--primary);
		height: 1px;
		margin-top: 6px;
		margin-right: 3px;
	}

	.first-line,
	.last-line {
		animation-play-state: paused;
	}

	.first-line {
		width: 0;
		animation: slide-in-left 0.5s ease-out forwards;
		animation-delay: 0s !important;
	}

	.last-line {
		margin-left: 100%;
		animation: slide-in-right 0.5s ease-out forwards;
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

	@media (max-width: 1024px) {
		@keyframes slide-in-left {
			0% {
				width: 0;
			}

			to {
				width: 300px;
			}
		}
	}

	@media (max-width: 500px) {
		@keyframes slide-in-left {
			0% {
				width: 0;
			}

			to {
				width: 180px;
			}
		}
	}

	.certification-container,
	.contact-container,
	.degree-container,
	.job-container {
		display: flex;
		flex-direction: column;
		margin-top: 50px;
	}

	.certification-header,
	.contact-header,
	.degree-header,
	.job-header {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	.certification-badge,
	.degree-dates,
	.job-dates {
		text-align: right;
		font-size: 1.75rem;
		font-weight: 700;
		padding-top: 5px;
	}

	.dark-degree-dates,
	.dark-degree-dates > *,
	.dark-job-dates,
	.dark-job-dates > * {
		color: var(--darktext);
	}

	.certification,
	.company,
	.contact-data,
	.degree {
		font-size: 1.25rem;
		font-weight: 300;
		margin: 0;
		color: #000;
	}

	.contact-data {
		color: #000000;
	}

	.contact-data-icons {
		display: flex;
		gap: 15px;
	}

	.certification-info,
	.contact-info,
	.degree-info,
	.job-info {
		display: flex;
		flex-direction: column;
		width: 75%;
	}

	@media (max-width: 1024px) {
		.certification,
		.company,
		.contact-data,
		.degree {
			font-size: 1rem;
		}

		.certification-badge,
		.certification-info > h3,
		.degree-dates,
		.degree-info > h3,
		.job-dates,
		.job-info > h3 {
			font-size: 1.375rem;
		}
	}

	.badge {
		height: 75px;
		width: 75px;
	}

	@media (max-width: 500px) {
		.mobile-badge {
			height: 65px;
			width: 65px;
		}
	}

	.dark-certification-info > *,
	.dark-contact-info > *,
	.dark-degree-info > *,
	.dark-job-description > *,
	.dark-job-info > * {
		color: var(--darktext);
	}

	ul {
		padding-left: 25px;
	}

	ul li {
		margin-bottom: 5px;
	}

	@media (max-width: 1024px) {
		li {
			font-size: 1rem;
		}
	}
</style>
