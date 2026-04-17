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
			class="block h-7 w-auto"
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
			<path d="M8,35 L11,32 H15 L18,35 L16,40 H10 Z" fill="#f97316" />
			<circle cx="13" cy="36" r="1.5" fill="#111827" />
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
