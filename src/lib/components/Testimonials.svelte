<script lang="ts">
	import { SITE_DATA } from '$lib/data';
	import Factory from '@lucide/svelte/icons/factory';
	import Building from '@lucide/svelte/icons/building';
	import type { Component } from 'svelte';

	const logoIcons: Record<string, Component<{ size?: number; class?: string }>> = {
		factory: Factory,
		building: Building
	};
</script>

<section class="py-24 px-6 md:px-12 lg:px-24 bg-slate-900">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Opinie</p>
			<h2 class="text-3xl md:text-4xl font-bold text-white">
				Zaufali <span class="text-accent">nam</span>
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each SITE_DATA.testimonials as testimonial}
				{@const Icon = logoIcons[testimonial.companyLogo] ?? Building}
				<article
					class="relative rounded-2xl border border-foreground/10 bg-slate-800/50 p-8
					       transition-all duration-300 hover:border-accent/30"
				>
					<span class="absolute top-6 left-6 text-5xl font-serif text-accent leading-none" aria-hidden="true">"</span>
					<span class="absolute top-6 right-6 text-5xl font-serif text-accent leading-none" aria-hidden="true">"</span>

					<blockquote class="relative pt-8 pb-6 text-white text-base leading-relaxed">
						{testimonial.quote}
					</blockquote>

					<div class="flex items-center gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent"
						>
							<Icon size={24} />
						</div>
						<div>
							<p class="font-semibold text-white">{testimonial.author}</p>
							<p class="text-sm text-foreground/50">{testimonial.position}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
