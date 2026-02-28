<script lang="ts">
	import { SITE_DATA } from '$lib/data';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Award from '@lucide/svelte/icons/award';
	import Clock from '@lucide/svelte/icons/clock';
	import Target from '@lucide/svelte/icons/target';
</script>

<section id="o-nas" class="py-24 px-6 md:px-12 lg:px-24">
	<div class="max-w-7xl mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div>
				<p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3">O firmie</p>
				<h2 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
					Doświadczenie i precyzja<br />
					<span class="text-accent">w automatyce przemysłowej</span>
				</h2>

				<div class="space-y-4 text-foreground/70 leading-relaxed">
					<p>
						<strong class="text-foreground">{SITE_DATA.name}</strong> to firma specjalizująca się
						w kompleksowej obsłudze zakładów przemysłowych w zakresie automatyki, elektryki
						i nowoczesnych systemów sterowania.
					</p>
					<p>
						Jakub Pieczka to inżynier z wieloletnim doświadczeniem w branży, posiadający pełne
						uprawnienia energetyczne SEP do 1kV oraz powyżej 1kV. Dzięki praktyce zdobytej
						przy realizacjach w sektorze produkcyjnym, chemicznym i spożywczym — gwarantuje
						profesjonalne podejście do każdego projektu.
					</p>
					<p>
						Działamy na terenie całego Śląska i okolic, oferując szybki czas reakcji
						i elastyczne podejście do potrzeb klienta. Każda realizacja kończy się
						kompletną dokumentacją powykonawczą.
					</p>
				</div>

				<div class="mt-8 flex items-center gap-4 text-sm text-foreground/50">
					<span class="flex items-center gap-1.5">
						<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
						{SITE_DATA.contact.address}
					</span>
					<span class="flex items-center gap-1.5">
						<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
						NIP: {SITE_DATA.contact.nip}
					</span>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-5">
				{#each [
					{ icon: ShieldCheck, title: 'Uprawnienia SEP', desc: 'Pełne kwalifikacje energetyczne do 1kV i powyżej 1kV' },
					{ icon: Award, title: 'Certyfikaty', desc: 'Zgodność z normami PN-EN i wymogami BHP' },
					{ icon: Clock, title: 'Szybka reakcja', desc: 'Sprawne działanie i terminowa realizacja zleceń' },
					{ icon: Target, title: 'Precyzja', desc: 'Indywidualne podejście do każdego projektu i klienta' }
				] as item}
					{@const Icon = item.icon}
					<div
						class="group rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6
						       transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.05]"
					>
						<div
							class="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10
							       text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white"
						>
							<Icon size={22} />
						</div>
						<h3 class="font-semibold text-foreground mb-1.5 text-sm">{item.title}</h3>
						<p class="text-xs leading-relaxed text-foreground/50">{item.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
