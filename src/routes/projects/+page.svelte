<script lang="ts">
	import { dark, language } from '../ui_store';

    let pageTitle = $language == "EN" ? "Projects" : $language == "DE" ? "Projekte" : "Projects"
</script>

<svelte:head>
	<title>Dalton Blake | {pageTitle}</title>

	<meta
		name="description"
		content="Browse the projects by Dalton Blake, showcasing innovative software applications, UI/UX designs, and development expertise. Explore his work in modern web technologies and creative solutions."
	/>
</svelte:head>

<div class="coming-soon-container">
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
</div>

<style type="text/css">
	.coming-soon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		flex-direction: column;
	}

	.coming-soon-content {
		padding: 30px;
		max-width: 800px;
	}
</style>
