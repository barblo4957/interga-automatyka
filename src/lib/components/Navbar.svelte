<script lang="ts">
	import { SITE_DATA } from '$lib/data';
	import Logo from '$lib/components/Logo.svelte';
	import Phone from '@lucide/svelte/icons/phone';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';

	let mobileOpen = $state(false);

	const navLinks = [
		{ label: 'O firmie', href: '#o-nas' },
		{ label: 'Usługi', href: '#uslugi' },
		{ label: 'Realizacje', href: '#realizacje' }
	];

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<nav class="fixed top-0 left-0 w-full z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
	<div class="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
		<Logo />

		<!-- Desktop nav -->
		<ul class="hidden md:flex items-center gap-8">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="text-sm font-medium text-foreground/60 transition-colors duration-200 hover:text-accent"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Desktop right side -->
		<div class="hidden md:flex items-center gap-5">
			<a
				href="tel:{SITE_DATA.contact.phone.replace(/\s/g, '')}"
				class="flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-accent"
			>
				<Phone size={16} />
				{SITE_DATA.contact.phone}
			</a>
			<a
				href="#kontakt"
				class="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
			>
				Kontakt
			</a>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-foreground/70 transition-colors hover:text-accent hover:bg-foreground/5"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
		>
			{#if mobileOpen}
				<X size={22} />
			{:else}
				<Menu size={22} />
			{/if}
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="md:hidden border-t border-foreground/10 bg-background/95 backdrop-blur-lg">
			<div class="px-6 py-4 space-y-1">
				{#each navLinks as link}
					<a
						href={link.href}
						class="block rounded-lg px-4 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-accent"
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}
			</div>
			<div class="border-t border-foreground/10 px-6 py-4 space-y-3">
				<a
					href="tel:{SITE_DATA.contact.phone.replace(/\s/g, '')}"
					class="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-accent"
					onclick={closeMobile}
				>
					<Phone size={16} />
					{SITE_DATA.contact.phone}
				</a>
				<a
					href="#kontakt"
					class="block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent/90"
					onclick={closeMobile}
				>
					Kontakt
				</a>
			</div>
		</div>
	{/if}
</nav>
