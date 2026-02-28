<script lang="ts">
	import { SITE_DATA } from '$lib/data';
	import Lightbulb from '@lucide/svelte/icons/lightbulb';
	import Factory from '@lucide/svelte/icons/factory';
	import Wrench from '@lucide/svelte/icons/wrench';
	import CircuitBoard from '@lucide/svelte/icons/circuit-board';
	import Server from '@lucide/svelte/icons/server';
	import Zap from '@lucide/svelte/icons/zap';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import Cpu from '@lucide/svelte/icons/cpu';
	import type { Component } from 'svelte';

	const icons: Record<string, Component<{ size?: number; class?: string }>> = {
		'Doradztwo techniczne': Lightbulb,
		'Prowadzenie inwestycji automatyki przemysłowej': Factory,
		'Utrzymanie ruchu': Wrench,
		'Projektowanie układów sterowania': CircuitBoard,
		'Montaż szaf sterowniczych': Server,
		'Pomiary i badania elektryczne': Zap,
		'Optymalizacja procesów': TrendingUp,
		'Programowanie PLC, HMI, SCADA': Cpu
	};
</script>

<section id="uslugi" class="py-20 px-6 md:px-12 lg:px-24">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
			Nasze <span class="text-accent">Usługi</span>
		</h2>
		<p class="text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
			Kompleksowa obsługa w zakresie automatyki przemysłowej i elektryki — od doradztwa po wdrożenie.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each SITE_DATA.services as service}
				{@const Icon = icons[service.title]}
				<article
					class="group relative rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8
					       transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.05] hover:-translate-y-1"
				>
					<div
						class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10
						       text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white"
					>
						{#if Icon}
							<Icon size={24} />
						{/if}
					</div>

					<h3 class="text-lg font-semibold mb-3 text-foreground transition-colors duration-300 group-hover:text-accent">
						{service.title}
					</h3>

					<p class="text-sm leading-relaxed text-foreground/60">
						{service.description}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>
