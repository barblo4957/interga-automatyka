<script lang="ts">
	interface Props {
		showText?: boolean;
		class?: string;
	}

	let { showText = true, class: className = '' }: Props = $props();
</script>

<a href="/" class="inline-flex items-center gap-2.5 {className}" aria-label="Integra Automatyka — Strona główna">
	<!-- Monogram SVG: "I" (biały) + "A" (pomarańczowy) — zawsze widoczny -->
	<span class="inline-block size-8 shrink-0" style="width: 32px; height: 32px;">
		<svg
			viewBox="0 0 40 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			class="block w-full h-full object-contain"
			aria-hidden="true"
			role="img"
		>
			<!-- "I" — pionowa belka z serifami -->
			<rect x="3" y="4" width="6" height="28" rx="1.5" fill="#f4f4f5" />
			<rect x="1" y="4" width="10" height="4" rx="1" fill="#f4f4f5" />
			<rect x="1" y="28" width="10" height="4" rx="1" fill="#f4f4f5" />

			<!-- "A" — trójkąt w górę + poprzeczka -->
			<path
				d="M16 32 L20 8 L24 8 L28 32 L25 32 L22 21 L19 32 Z"
				fill="#f97316"
			/>
			<rect x="20.5" y="19" width="7" height="3" rx="1" fill="#f97316" />
		</svg>
	</span>

	{#if showText}
		<span class="text-lg font-bold tracking-tight leading-none">
			<span class="text-foreground">Integra</span>{' '}
			<span class="text-accent">Automatyka</span>
		</span>
	{/if}
</a>
