<script lang="ts">
	import { onMount } from 'svelte';

	import { dark, language } from './ui_store';

	import { Sun, Moon } from 'lucide-svelte';
	import { onNavigate } from '$app/navigation';

	let openNavMenu: boolean = false;
	let openLanguageMenu: boolean = false;

	let savestore = false;
	let doc: Document;
	$: if (savestore) {
		setCookie('dark', $dark, 1);
		setCookieString('language', $language, 1);
		if (doc) {
			if ($dark) {
				doc.body.style.background = 'rgb(20,20,20)';
			} else {
				doc.body.style.background = 'rgb(253,253,253)';
			}
		}
	} else {
		if (doc) {
			if ($dark) {
				doc.body.style.background = 'rgb(20,20,20)';
			} else {
				doc.body.style.background = 'rgb(253,253,253)';
			}
		}
	}

	onMount(() => {
		let darkCookie = getCookie('dark');
		if (darkCookie) {
			$dark = darkCookie === 'true' ? true : false;
		}
		let languageCookie = getCookie('language');
		if (languageCookie.trim() == '') {
			languageCookie = 'EN';
		}
		$language = languageCookie;
		savestore = true;

		doc = document;

		return () => {};
	});

	let checkbox: HTMLElement;
	onNavigate(() => {
		openNavMenu = false;
		if (checkbox instanceof HTMLInputElement) {
			checkbox.checked = false;
		}
	});

	const toggleDark = async () => {
		$dark = !$dark;
	};

	function setCookie(cname: string, cvalue: boolean, exdays: number) {
		const d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	}

	function setCookieString(cname: string, cvalue: string, exdays: number) {
		const d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	}

	function getCookie(cname: string) {
		let name = cname + '=';
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}
</script>

<div
	style="display: flex; flex-direction: column; min-height: 100vh; background: {$dark
		? 'rgb(20,20,20)'
		: 'rgb(253,253,253)'}"
>
	<!-- Navigation Menu - Desktop -->
	<div
		class="hide-under-desktop"
		style="display: flex; align-items: center; min-height: 70px; width: calc(100% - 40px); padding: 0 20px; gap: 10px; position: relative;"
	>
		<button
			on:click={() => {
				openLanguageMenu = !openLanguageMenu;
			}}
			class="primary-button {$dark ? 'dark' : ''}"
			style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'};"
		>
			{$language}
		</button>
		<div
			class={openLanguageMenu ? 'open-language-menu' : ''}
			style="display: flex; flex-direction: column; position: absolute; left: 20px; top: 60px; border-radius: 5px; transform: scale(0); pointer-events: none; background: {$dark
				? 'rgb(20,20,20)'
				: 'rgb(253,253,253)'}; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.1);"
		>
			<button
				on:click={() => {
					$language = 'EN';
					openLanguageMenu = false;
				}}
				class="primary-button {$dark ? 'dark' : ''}"
				style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'};"
			>
				{#if $language == 'EN'}
					EN - English
				{:else if $language == 'DE'}
					EN - Englisch
				{/if}
			</button>
			<button
				on:click={() => {
					$language = 'DE';
					openLanguageMenu = false;
				}}
				class="primary-button {$dark ? 'dark' : ''}"
				style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'};"
			>
				{#if $language == 'EN'}
					DE - German
				{:else if $language == 'DE'}
					DE - Deutsch
				{/if}
			</button>
		</div>

		<button
			class="primary-button {$dark ? 'dark' : ''}"
			style="color: {$dark
				? 'var(--darktext)'
				: 'var(--primary)'}; margin-left: auto; padding: 0; height: 35px;"
		>
			{#if $language == 'EN'}
				<a
					href="/"
					style="color: {$dark
						? 'var(--darktext)'
						: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Resume</a
				>
			{:else if $language == 'DE'}
				<a
					href="/"
					style="color: {$dark
						? 'var(--darktext)'
						: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Lebenslauf</a
				>
			{/if}
		</button>
		<button
			class="primary-button {$dark ? 'dark' : ''}"
			style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'}; padding: 0; height: 35px;"
		>
			{#if $language == 'EN'}
				<a
					href="/projects"
					data-sveltekit-preload-data="hover"
					style="color: {$dark
						? 'var(--darktext)'
						: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Projects</a
				>
			{:else if $language == 'DE'}
				<a
					href="/projects"
					data-sveltekit-preload-data="hover"
					style="color: {$dark
						? 'var(--darktext)'
						: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Projekte</a
				>
			{/if}
		</button>
		<button
			class="primary-button {$dark ? 'dark' : ''}"
			style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'}; padding: 0; height: 35px;"
		>
			{#if $language == 'EN'}
				<a
					href="/blog"
					data-sveltekit-preload-data="hover"
					style="color: {$dark
						? 'var(--darktext)'
						: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Blog</a
				>
			{:else if $language == 'DE'}
				<a
					href="/blog"
					data-sveltekit-preload-data="hover"
					style="color: {$dark
						? 'var(--darktext)'
						: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Blog</a
				>
			{/if}
		</button>
		{#if $dark}
			<button
				aria-label="Toggle Color Mode"
				on:click={toggleDark}
				style="background: none; outline: 0; border: none; cursor: pointer;"
			>
				<Sun color="var(--darktext)" strokeWidth="1"></Sun>
			</button>
		{:else}
			<button
				aria-label="Toggle Color Mode"
				on:click={toggleDark}
				style="background: none; outline: 0; border: none; cursor: pointer;"
			>
				<Moon color="var(--primary)" strokeWidth="1"></Moon>
			</button>
		{/if}
	</div>

	<!-- Navigation Menu - Under Desktop  -->
	<div
		class="show-under-desktop"
		style="display: flex; align-items: center; min-height: 70px; width: calc(100% - 40px); padding: 0 20px; gap: 10px; position: relative;"
	>
		<button
			on:click={() => {
				openLanguageMenu = !openLanguageMenu;
			}}
			class="primary-button {$dark ? 'dark' : ''}"
			style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'};"
		>
			{$language}
		</button>
		<div
			class={openLanguageMenu ? 'open-language-menu' : ''}
			style="display: flex; flex-direction: column; position: absolute; left: 20px; top: 60px; border-radius: 5px; transform: scale(0); pointer-events: none; background: {$dark
				? 'rgb(20,20,20)'
				: 'rgb(253,253,253)'}; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.1);"
		>
			<button
				on:click={() => {
					$language = 'EN';
					openLanguageMenu = false;
				}}
				class="primary-button {$dark ? 'dark' : ''}"
				style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'};"
			>
				{#if $language == 'EN'}
					EN - English
				{:else if $language == 'DE'}
					EN - Englisch
				{/if}
			</button>
			<button
				on:click={() => {
					$language = 'DE';
					openLanguageMenu = false;
				}}
				class="primary-button {$dark ? 'dark' : ''}"
				style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'};"
			>
				{#if $language == 'EN'}
					DE - German
				{:else if $language == 'DE'}
					DE - Deutsch
				{/if}
			</button>
		</div>

		<div
			style="min-height: 35px; display: flex; align-items: center; justify-content: center; margin-left: auto;"
		>
			<input id="toggle-hamburger" type="checkbox" bind:this={checkbox} />
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<label
				class="hamburger-container"
				for="toggle-hamburger"
				on:click={() => {
					openNavMenu = !openNavMenu;
				}}
			>
				<div
					style="background-color: {$dark
						? 'var(--darktext)'
						: 'var(--primary)'}; transition: all 150ms;"
					class="hamburger {$dark ? 'dark-hamburger' : 'light-hamburger'}"
				></div>
			</label>
		</div>
		<div
			class={openNavMenu ? 'open-nav-menu' : ''}
			style="display: flex; flex-direction: column; position: absolute; right: 20px; top: 60px; border-radius: 5px; transform: scale(0); pointer-events: none; background: {$dark
				? 'rgb(20,20,20)'
				: 'rgb(253,253,253)'}; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.1);"
		>
			<button
				class="primary-button {$dark ? 'dark' : ''}"
				style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'}; padding: 0; height: 35px;"
			>
				{#if $language == 'EN'}
					<a
						href="/"
						style="color: {$dark
							? 'var(--darktext)'
							: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Resume</a
					>
				{:else if $language == 'DE'}
					<a
						href="/"
						style="color: {$dark
							? 'var(--darktext)'
							: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Lebenslauf</a
					>
				{/if}
			</button>
			<button
				class="primary-button {$dark ? 'dark' : ''}"
				style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'}; padding: 0; height: 35px;"
			>
				{#if $language == 'EN'}
					<a
						href="/projects"
						data-sveltekit-preload-data="hover"
						style="color: {$dark
							? 'var(--darktext)'
							: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Projects</a
					>
				{:else if $language == 'DE'}
					<a
						href="/projects"
						data-sveltekit-preload-data="hover"
						style="color: {$dark
							? 'var(--darktext)'
							: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Projekte</a
					>
				{/if}
			</button>
			<button
				class="primary-button {$dark ? 'dark' : ''}"
				style="color: {$dark ? 'var(--darktext)' : 'var(--primary)'}; padding: 0; height: 35px;"
			>
				{#if $language == 'EN'}
					<a
						href="/blog"
						data-sveltekit-preload-data="hover"
						style="color: {$dark
							? 'var(--darktext)'
							: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Blog</a
					>
				{:else if $language == 'DE'}
					<a
						href="/blog"
						data-sveltekit-preload-data="hover"
						style="color: {$dark
							? 'var(--darktext)'
							: 'var(--primary)'}; text-decoration: none; padding: 10px 10px;">Blog</a
					>
				{/if}
			</button>
		</div>
		{#if $dark}
			<button
				aria-label="Toggle Color Mode"
				on:click={toggleDark}
				style="background: none; outline: 0; border: none; cursor: pointer;"
			>
				<Sun color="var(--darktext)" strokeWidth="1"></Sun>
			</button>
		{:else}
			<button
				aria-label="Toggle Color Mode"
				on:click={toggleDark}
				style="background: none; outline: 0; border: none; cursor: pointer;"
			>
				<Moon color="var(--primary)" strokeWidth="1"></Moon>
			</button>
		{/if}
	</div>

	<slot />

	<!-- Footer -->
	<div
		style="width: calc(100% - 40px); padding: 0 20px 10px 20px; display: flex; flex-direction: column; margin-top: auto;"
	>
		<div
			style="display: flex; align-items: center; justify-content: center; width: 100%; margin-bottom: 10px; gap: 15px;"
		>
			<a
				style="color: {$dark ? 'var(--darktext)' : 'black'}; font-size: 12px;"
				href="/attributions"
			>
				{#if $language == 'EN'}
					Attributions
				{:else if $language == 'DE'}
					Zuschreibungen
				{/if}
			</a>
			<a style="color: {$dark ? 'var(--darktext)' : 'black'}; font-size: 12px;" href="/impressum"
				>Impressum</a
			>
			<a
				style="color: {$dark ? 'var(--darktext)' : 'black'}; font-size: 12px;"
				href="/privacy-policy"
			>
				{#if $language == 'EN'}
					Privacy Policy
				{:else if $language == 'DE'}
					Datenschutzerklärung
				{/if}
			</a>
		</div>

		<div
			style="background: {$dark ? 'var(--darktext)' : 'var(--primary)'}; height: 1px; width: 100%;"
		></div>

		<div style="width: calc(100% - 100px); display: flex; margin-top: 6px; padding: 0 50px;">
			<div
				style="background: {$dark
					? 'var(--darktext)'
					: 'var(--primary)'}; height: 1px; width: 20px; transform: rotate(-45deg);"
			></div>
			<div
				style="background: {$dark
					? 'var(--darktext)'
					: 'var(--primary)'}; height: 1px; width: 20px; transform: rotate(45deg); margin-left: auto;"
			></div>
		</div>

		<div style="width: calc(100% - 50px); display: flex; margin-top: 6px; padding: 0 25px;">
			<div
				style="background: {$dark
					? 'var(--darktext)'
					: 'var(--primary)'}; height: 1px; width: 25vw;"
			></div>
			<div
				style="background: {$dark
					? 'var(--darktext)'
					: 'var(--primary)'}; height: 1px; width: 25vw; margin-left: auto;"
			></div>
		</div>

		<div
			class="not-desktop-footer"
			style="display: flex; align-items: center; justify-content: center; width: 100%; height: 15px; background: {$dark
				? 'rgb(20,20,20)'
				: 'rgb(253,253,253)'};"
		>
			<p
				style="display: flex; align-items: center; font-size: 12px; margin: 0; border-radius: 5px; color: {$dark
					? 'var(--darktext)'
					: 'var(--primary)'}; background: {$dark ? 'rgb(20,20,20)' : 'rgb(253,253,253)'};"
			>
				© 2025 Dalton Blake &nbsp;&nbsp;&nbsp;
			</p>
			{#if $dark}
				<a href="https://www.netlify.com" target="_blank">
					<img src="/brands/netlify-light.webp" alt="Deploys by Netlify" height="25" width="57" />
				</a>
			{:else}
				<a href="https://www.netlify.com" target="_blank">
					<img src="/brands/netlify-dark.webp" alt="Deploys by Netlify" height="25" width="57" />
				</a>
			{/if}
		</div>
	</div>
</div>

<style type="text/css">
	#toggle-hamburger {
		display: none;
	}

	.hamburger-container {
		min-height: 25px;
		height: 25px;
		max-height: 25px;

		min-width: 25px;
		width: 25px;
		max-width: 25px;

		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;
	}

	.hamburger {
		min-width: 25px;
		width: 25px;
		max-width: 25px;

		min-height: 1px;
		height: 1px;
		max-height: 1px;

		border-radius: 5px;

		transition: all 150ms;
	}

	.hamburger::before {
		min-width: 25px;
		width: 25px;
		max-width: 25px;

		min-height: 1px;
		height: 1px;
		max-height: 1px;

		border-radius: 5px;

		transition: all 150ms;

		position: absolute;
		top: 6px;
		content: '';
	}

	.hamburger::after {
		min-width: 25px;
		width: 25px;
		max-width: 25px;

		min-height: 1px;
		height: 1px;
		max-height: 1px;

		border-radius: 5px;

		transition: all 150ms;

		position: absolute;
		bottom: 6px;
		content: '';
	}

	.hamburger-container .light-hamburger::before {
		background: var(--primary) !important;
	}

	.hamburger-container .light-hamburger::after {
		background: var(--primary) !important;
	}

	.hamburger-container .dark-hamburger::before {
		background: var(--darktext) !important;
	}

	.hamburger-container .dark-hamburger::after {
		background: var(--darktext) !important;
	}

	#toggle-hamburger:checked + .hamburger-container .light-hamburger::before {
		transform: rotate(-45deg) translate(-5px, 5px);
		background: var(--primary) !important;
	}

	#toggle-hamburger:checked + .hamburger-container .light-hamburger::after {
		transform: rotate(45deg) translate(-4px, -4px);
		background: var(--primary) !important;
	}

	#toggle-hamburger:checked + .hamburger-container .dark-hamburger::before {
		transform: rotate(-45deg) translate(-5px, 5px);
		background: var(--darktext) !important;
	}

	#toggle-hamburger:checked + .hamburger-container .dark-hamburger::after {
		transform: rotate(45deg) translate(-4px, -4px);
		background: var(--darktext) !important;
	}

	#toggle-hamburger:checked + .hamburger-container .hamburger {
		background: transparent !important;
	}

	.open-language-menu {
		transform: scale(1) !important;
		pointer-events: all !important;
	}

	.open-nav-menu {
		transform: scale(1) !important;
		pointer-events: all !important;
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

	.show-under-desktop {
		display: none !important;
	}

	@media (max-width: 1024px) {
		.not-desktop-footer {
			flex-direction: column;
			margin-top: 10px;
			gap: 5px;
			margin-bottom: 15px;
		}

		.not-desktop-footer > p {
			padding: 0 0 0 10px;
		}

		.hide-under-desktop {
			display: none !important;
		}

		.show-under-desktop {
			display: flex !important;
		}
	}
</style>
