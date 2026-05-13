<script lang="ts">
	type PartnerLogo = { src: string; alt: string; large?: boolean };

	const partnerLogos: PartnerLogo[] = [
		{ src: '/logos/brembo.png', alt: 'Logo Brembo' },
		{ src: '/logos/ekozub.png', alt: 'Logo Eko-Zub' },
		{ src: '/logos/elbar-katowice.png', alt: 'Logo Elbar Katowice' },
		{ src: '/logos/procelwag2.jpg', alt: 'Logo Procelwag' },
		{ src: '/logos/orlen-terminka.svg', alt: 'Logo Orlen Terminka', large: true },
		{ src: '/logos/pgnig2.jpg', alt: 'Logo PGNiG', large: true },
		{ src: '/logos/hermon.png', alt: 'Logo Hermon', large: true }
	];
</script>

<section class="border-t border-foreground/10 bg-background py-24 px-6 md:px-12 lg:px-24">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-12 text-center text-3xl font-bold text-foreground md:mb-14 md:text-4xl">
			Zaufali <span class="text-accent">nam</span>
		</h2>

		<div
			class="flex flex-row flex-wrap items-center justify-center gap-8 sm:gap-12"
			aria-label="Logotypy firm, które nam zaufały"
		>
			{#each partnerLogos as { src, alt, large }}
				<div
					class="flex w-auto shrink-0 items-center justify-center {large
						? 'h-[72px] sm:h-[120px]'
						: 'h-14 sm:h-20'}"
				>
					<img
						{src}
						{alt}
						class="h-full w-auto max-w-full object-contain"
						loading="lazy"
						decoding="async"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
