<script lang="ts">
	import { SITE_DATA } from '$lib/data';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	const FALLBACK_IMAGE =
		'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop';

	function onImageError(e: Event) {
		const img = e.currentTarget as HTMLImageElement;
		if (img && img.src !== FALLBACK_IMAGE) {
			img.onerror = null;
			img.src = FALLBACK_IMAGE;
		}
	}
</script>

<section id="realizacje" class="py-24 px-6 md:px-12 lg:px-24">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				Wybrane <span class="text-accent">realizacje</span>
			</h2>
			<p class="text-foreground/60 max-w-2xl mx-auto">
				Przykładowe projekty zrealizowane dla klientów z sektora przemysłowego.
				Każdy z nich wymagał indywidualnego podejścia i precyzyjnego wykonania.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each SITE_DATA.projects as project}
				<article class="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] transition-all duration-300 hover:border-accent/30 hover:-translate-y-1">
					<div class="relative aspect-[3/2] overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							loading="lazy"
							onerror={onImageError}
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>

						<div class="absolute top-4 left-4">
							<span class="rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
								{project.category}
							</span>
						</div>

						<div class="absolute bottom-0 left-0 right-0 p-5">
							<h3 class="text-lg font-semibold text-white drop-shadow-lg flex items-center gap-2">
								{project.title}
								<span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
									<ArrowUpRight size={14} />
								</span>
							</h3>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
