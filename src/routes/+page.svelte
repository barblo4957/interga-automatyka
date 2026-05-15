<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Booking from '$lib/components/Booking.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Hero />
<About />
<Services />
<Projects />
<Testimonials />

<section id="kontakt" class="border-t border-foreground/10 py-24 px-6 md:px-12 lg:px-24">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<h2 class="text-3xl font-bold text-foreground md:text-4xl">
				<span class="text-accent">Kontakt</span>
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-foreground/60">
				Napisz przez WhatsApp lub wybierz termin w kalendarzu — odpowiemy i doprecyzujemy szczegóły współpracy.
			</p>
		</div>

		<div class="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
			<Booking />
			<Contact />
		</div>
	</div>
</section>

<Footer />
