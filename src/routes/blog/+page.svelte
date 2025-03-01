<script lang="ts">
    import { dark, language } from "../ui_store";
</script>

<svelte:head>
	<title>Dalton Blake | Blog</title>

	<meta
		name="description"
		content="Explore Dalton Blake’s blog, where I share insights, experiences, and thoughts on my current events, hobbies, and technology."
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