<script lang="ts">
	interface Props {
		showText?: boolean;
		class?: string;
	}

	let { showText = true, class: className = '' }: Props = $props();
</script>

<a href="/" class="inline-flex items-center gap-2.5 {className}" aria-label="Integra Automatyka — Strona główna">
	<!-- Sygnet: niedokończona ramka + zębatka + litera I -->
	<span class="inline-block shrink-0">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			class="block h-12 w-auto"
			fill-rule="evenodd"
			aria-hidden="true"
			role="img"
		>
			<path
				d="M10,10 H40 V40 H25 M10,10 V25"
				fill="none"
				stroke="#f97316"
				stroke-width="3"
				stroke-linecap="round"
			/>
			<!-- Zębatka 8-zębna: środek (17.35, 36.42); obrys ×1.2 względem bazowych promieni, otwór r=2.05 bez zmian -->
			<g transform="translate(-3.25,0)">
				<path
					fill="#f97316"
					fill-rule="evenodd"
					d="M17.35,31L18.82,32.87L21.19,32.58L20.9,34.95L22.77,36.42L20.9,37.89L21.19,40.26L18.82,39.97L17.35,41.84L15.88,39.97L13.51,40.26L13.8,37.89L11.93,36.42L13.8,34.95L13.51,32.58L15.88,32.87Z M15.3,36.42a2.05,2.05 0 1 1 4.1,0a2.05,2.05 0 0 1 -4.1,0"
				/>
			</g>
			<text x="20" y="32" font-family="Georgia, serif" font-weight="900" font-size="22" fill="#ffffff">I</text>
		</svg>
	</span>

	{#if showText}
		<span class="text-lg font-bold tracking-tight leading-none">
			<span class="text-foreground">Integra</span>{' '}
			<span class="text-accent">Automatyka</span>
		</span>
	{/if}
</a>
