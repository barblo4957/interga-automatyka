<script lang="ts">
	import { SITE_DATA } from '$lib/data';
	import Logo from '$lib/components/Logo.svelte';

	const quickLinks = [
		{ label: 'O firmie', href: '#o-nas' },
		{ label: 'Usługi', href: '#uslugi' },
		{ label: 'Realizacje', href: '#realizacje' }
	];
</script>

<footer class="border-t border-foreground/10 bg-background">
	<div class="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-24">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
			<!-- Lewa: Logo + opis -->
			<div>
				<Logo class="mb-4" />
				<p class="text-sm text-foreground/60 leading-relaxed max-w-xs">
					Integra Automatyka — profesjonalne usługi z zakresu automatyki przemysłowej,
					elektryki i pomiarów. Realizacje od projektu po uruchomienie.
				</p>
			</div>

			<!-- Środek: Szybkie linki -->
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
					Szybkie linki
				</h3>
				<ul class="space-y-3">
					{#each quickLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-foreground/60 transition-colors hover:text-accent"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Prawa: Dane firmy -->
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
					Dane firmy
				</h3>
				<address class="not-italic text-sm text-foreground/60 space-y-2">
					<p>NIP: {SITE_DATA.contact.nip}</p>
					<p>Adres: {SITE_DATA.contact.address}</p>
				</address>
			</div>
		</div>

		<div class="mt-16 pt-8 border-t border-foreground/10 text-center text-sm text-foreground/50">
			<p>© 2026 Integra Automatyka. Wszystkie prawa zastrzeżone.</p>
		</div>
	</div>
</footer>
