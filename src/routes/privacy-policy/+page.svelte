<script lang="ts">
	import { dark, language } from '../ui_store';

    let pageTitle = $language == "EN" ? "Privacy Policy" : $language == "DE" ? "Datenschutzerklärung" : "Privacy Policy"
</script>

<svelte:head>
	<title>Dalton Blake | {pageTitle}</title>

	<meta
		name="description"
		content="Read Dalton Blake’s Privacy Policy to understand how your data is handled. 
        Learn about cookies, third-party services, and how personal information is protected on this personal portfolio website."
	/>
</svelte:head>

<div class="privacy-policy">
	<h2 style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			Privacy Policy
		{:else if $language == 'DE'}
			Datenschutzerklärung
		{/if}
	</h2>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == 'EN'}
			1. Responsible Party
		{:else if $language == 'DE'}
			1. Verantwortliche Stelle
		{/if}
	</h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">Name: Dalton Blake</p>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		Email: <a
			style="color: {$dark ? 'var(--darktext)' : 'black'}"
			href="mailto:contact@daltonblake.de">contact@daltonblake.de</a
		>
	</p>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		Website: <a
			style="color: {$dark ? 'var(--darktext)' : 'black'}"
			href="https://daltonblake.de"
			target="_blank"
			rel="noopener noreferrer">daltonblake.de</a
		>
	</p>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == 'EN'}
            2. General Information
		{:else if $language == 'DE'}
			2. Allgemeine Informationen
		{/if}
    </h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            This website serves solely as a personal portfolio to showcase my professional experience,
		    projects, and blog posts. No personal data is collected, stored, or shared with third parties.
        {:else if $language == "DE"}
            Diese Website dient ausschließlich als persönliches Portfolio, in dem ich meine beruflichen Erfahrungen, Projekte und Blogbeiträge präsentiere. Es werden keine persönlichen Daten gesammelt, gespeichert oder an Dritte weitergegeben.
        {/if}
	</p>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            3. Functional Cookies
        {:else if $language == "DE"}
            3. Funktionale Cookies
        {/if}
    </h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == "EN"}
            This website uses two strictly necessary functional cookies to enhance the user experience:
        {:else if $language == "DE"}
            Diese Website verwendet zwei unbedingt notwendige funktionale Cookies, um die Benutzerfreundlichkeit zu verbessern:
        {/if}
	</p>
	<ul style="color: {$dark ? 'var(--darktext)' : 'black'}">
		<li style="color: {$dark ? 'var(--darktext)' : 'black'}">
			<span style="color: {$dark ? 'var(--darktext)' : 'black'}; font-weight: Bold;">dark</span> – 
            {#if $language == "EN"}
                Stores the user’s dark/light mode preference.
            {:else if $language == "DE"}
                Speichert die Präferenz des Benutzers für den Hell-/Dunkelmodus.
            {/if}
		</li>
		<li style="color: {$dark ? 'var(--darktext)' : 'black'}">
			<span style="color: {$dark ? 'var(--darktext)' : 'black'}; font-weight: Bold;">language</span>– 
            {#if $language == "EN"}
                Stores the preferred language (English or German).
            {:else if $language == "DE"}
                Speichert die bevorzugte Sprache (Englisch oder Deutsch).
            {/if}
		</li>
	</ul>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == "EN"}
            These cookies do not track users, are not used for analytics, and are not stored on a server.
		    They are only saved locally in the user’s browser to ensure a seamless UI experience. The
		    cookies expire after 1 day.
        {:else if $language == "DE"}
            Diese Cookies verfolgen keine Nutzer, werden nicht für Analysen verwendet und nicht auf einem Server gespeichert. Sie werden nur lokal im Browser des Nutzers gespeichert, um ein nahtloses Benutzererlebnis zu gewährleisten. Die Cookies verfallen nach 1 Tag.
        {/if}
	</p>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            4. Third-Party Services
        {:else if $language == "DE"}
            4. Dienstleistungen von Drittanbietern
        {/if}        
    </h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            This website uses the following third-party services:
        {:else if $language == "DE"}
            Diese Website nutzt die folgenden Dienste Dritter:
        {/if}		
	</p>
	<ul style="color: {$dark ? 'var(--darktext)' : 'black'}">
		<li style="color: {$dark ? 'var(--darktext)' : 'black'}">
			<a
				style="color: {$dark ? 'var(--darktext)' : 'black'}"
				href="https://policies.google.com/privacy"
				target="_blank"
				rel="noopener noreferrer">Google Fonts</a
			> – 
            {#if $language == "EN"}
                Fonts for the website (Privacy Policy).
            {:else if $language == "DE"}
                Schriftarten für die Website (Datenschutzerklärung).
            {/if}            
		</li>
		<li style="color: {$dark ? 'var(--darktext)' : 'black'}">
			<a
				style="color: {$dark ? 'var(--darktext)' : 'black'}"
				href="https://www.netlify.com/privacy/"
				target="_blank"
				rel="noopener noreferrer">Netlify</a
			> – 
            {#if $language == "EN"}
                Hosting provider (Privacy Policy).
            {:else if $language == "DE"}
                Hosting-Anbieter (Datenschutzerklärung).
            {/if}            
		</li>
		<li style="color: {$dark ? 'var(--darktext)' : 'black'}">
			<a
				style="color: {$dark ? 'var(--darktext)' : 'black'}"
				href="https://fontawesome.com/privacy"
				target="_blank"
				rel="noopener noreferrer">FontAwesome</a
			> – 
            {#if $language == "EN"}
                Icons for the website (Privacy Policy).
            {:else if $language == "DE"}
                Icons für die Website (Datenschutzerklärung).
            {/if}
		</li>
	</ul>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == "EN"}
            These services may process user data according to their respective privacy policies.
        {:else if $language == "DE"}
            Diese Dienste können Nutzerdaten gemäß ihren jeweiligen Datenschutzrichtlinien verarbeiten.
        {/if}
	</p>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            5. External Links
        {:else if $language == "DE"}
            5. Externe Links
        {/if}        
    </h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == "EN"}
            My website contains links to external sites (e.g., LinkedIn, GitHub, Xing). I have no control
		    over the content or privacy practices of these sites. Please review their respective privacy
		    policies for more information.
        {:else if $language == "DE"}
            Meine Website enthält Links zu externen Seiten (z.B. LinkedIn, GitHub, Xing). Ich habe keine Kontrolle über den Inhalt oder die Datenschutzpraktiken dieser Seiten. Bitte lesen Sie die jeweiligen Datenschutzrichtlinien für weitere Informationen.
        {/if}        
	</p>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            6. Legal Compliance
        {:else if $language == "DE"}
            6. Rechtskonformität
        {/if}
    </h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == "EN"}
            This website does not collect or process personal data in accordance with GDPR (General Data
		    Protection Regulation) and other applicable privacy laws. Since no analytics, tracking, or user
		    data collection occurs, no explicit cookie consent banner is required. As this website does not
		    collect personal data, no user data is available for access, modification, or deletion.
        {:else if $language == "DE"}
            Diese Website erhebt und verarbeitet keine personenbezogenen Daten in Übereinstimmung mit der GDPR (General Protection Regulation) und anderen geltenden Datenschutzgesetzen. Da keine Analyse, Nachverfolgung oder Sammlung von Nutzerdaten erfolgt, ist kein ausdrückliches Cookie-Zustimmungsbanner erforderlich. Da diese Website keine sammelt, sind keine Nutzerdaten für den Zugriff, die Änderung oder Löschung verfügbar.
        {/if}        
	</p>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            7. Copyright Notice
        {:else if $language == "DE"}
            7. Urheberrechtshinweis
        {/if}
    </h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == "EN"}
            All content on this website is protected by copyright. Any reproduction, modification, or
		    distribution requires my explicit permission.
        {:else if $language == "DE"}
            Der gesamte Inhalt dieser Website ist urheberrechtlich geschützt. Jede Vervielfältigung, Veränderung oder Verbreitung bedarf meiner ausdrücklichen Genehmigung.
        {/if}        
	</p>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            8. Contact for Privacy Concerns
        {:else if $language == "DE"}
            8. Kontakt für Datenschutzbelange
        {/if}
    </h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == "EN"}
            If you have any questions about this privacy policy, you may contact me at
        {:else if $language == "DE"}
            Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie mich unter folgender Adresse erreichen
        {/if}
        <a
			style="color: {$dark ? 'var(--darktext)' : 'black'}"
			href="mailto:contact@daltonblake.de">contact@daltonblake.de</a
		>.
	</p>

	<h3 style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            9. Changes to This Privacy Policy
        {:else if $language == "DE"}
            9. Änderungen an dieser Datenschutzrichtlinie
        {/if}        
    </h3>
	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
		{#if $language == "EN"}
            This privacy policy may be updated to reflect legal or functional changes.
        {:else if $language == "DE"}
            Diese Datenschutzrichtlinie kann aktualisiert werden, um rechtlichen oder funktionalen Änderungen Rechnung zu tragen.
        {/if}
	</p>

	<p style="color: {$dark ? 'var(--darktext)' : 'black'}">
        {#if $language == "EN"}
            Last updated: 01.03.2025
        {:else if $language == "DE"}
            Zuletzt aktualisiert am: 01.03.2025
        {/if}
    </p>
</div>

<style type="text/css">
	.privacy-policy {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		line-height: 1.6;
		margin-bottom: 50px;
	}

	.privacy-policy h2 {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.privacy-policy h3 {
		font-size: 1.5rem;
		margin-top: 30px;
	}

	.privacy-policy p {
		font-size: 1rem;
		margin-bottom: 15px;
	}

	.privacy-policy ul {
		list-style-type: disc;
		margin-left: 20px;
		margin-bottom: 20px;
	}

	.privacy-policy ul li {
		font-size: 1rem;
	}

	.privacy-policy a:hover {
		text-decoration: underline;
	}
</style>
