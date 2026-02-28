<script lang="ts">
	import { SITE_DATA } from '$lib/data';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
</script>

<section class="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden pt-[10svh] lg:pt-[12svh] pb-[10svh]">
	<div class="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/[0.08]"></div>

	<div
		class="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-accent/[0.06] blur-3xl"
	></div>
	<div
		class="absolute bottom-1/4 -left-32 h-72 w-72 rounded-full bg-accent/[0.04] blur-3xl"
	></div>

	<div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
		<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
			<span class="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
			Automatyka &bull; Elektryka &bull; Pomiary
		</div>

		<h1 class="text-[clamp(2.25rem,6svw+1rem,4.25rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
			<span class="text-foreground">Integra</span><br />
			<span class="text-accent">Automatyka</span>
		</h1>

		<p class="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-4">
			{SITE_DATA.name}
		</p>
		<p class="text-base text-foreground/40 max-w-xl mx-auto mb-10">
			Profesjonalne usługi z zakresu automatyki przemysłowej, elektryki i&nbsp;pomiarów.
			Kompleksowa realizacja od projektu po uruchomienie.
		</p>

		<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
			<a
				href="#rezerwacja"
				class="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white
				       shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
			>
				Umów pomiary
				<svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
			<a
				href="#uslugi"
				class="inline-flex items-center gap-2 rounded-xl border border-foreground/20 px-8 py-4 text-base font-semibold text-foreground
				       transition-all duration-300 hover:border-accent/50 hover:text-accent hover:-translate-y-0.5"
			>
				Zobacz usługi
			</a>
		</div>

		<div class="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
			<div class="text-center">
				<div class="text-2xl sm:text-3xl font-bold text-accent">10+</div>
				<div class="text-xs text-foreground/40 mt-1">Lat doświadczenia</div>
			</div>
			<div class="text-center">
				<div class="text-2xl sm:text-3xl font-bold text-accent">100+</div>
				<div class="text-xs text-foreground/40 mt-1">Realizacji</div>
			</div>
			<div class="text-center">
				<div class="text-2xl sm:text-3xl font-bold text-accent">8</div>
				<div class="text-xs text-foreground/40 mt-1">Obszarów usług</div>
			</div>
		</div>
	</div>

	<a
		href="#o-nas"
		class="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/30 transition-colors hover:text-accent animate-bounce"
		aria-label="Przewiń niżej"
	>
		<ChevronDown size={32} />
	</a>
</section>
