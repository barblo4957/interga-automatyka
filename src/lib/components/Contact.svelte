<script lang="ts">
	import MessageCircle from '@lucide/svelte/icons/message-circle';

	const WHATSAPP_NUMBER = '48530934510';
	const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let errors = $state<Record<string, string>>({});
	let submitted = $state(false);

	const fields = [
		{
			id: 'contact-name',
			key: 'name',
			label: 'Imię i nazwisko',
			type: 'text',
			autocomplete: 'name',
			placeholder: 'Jan Kowalski'
		},
		{
			id: 'contact-email',
			key: 'email',
			label: 'E-mail',
			type: 'email',
			autocomplete: 'email',
			placeholder: 'jan@firma.pl'
		},
		{
			id: 'contact-phone',
			key: 'phone',
			label: 'Telefon',
			type: 'tel',
			autocomplete: 'tel',
			placeholder: '+48 500 000 000'
		}
	] as const;

	function getValue(key: (typeof fields)[number]['key'] | 'message'): string {
		switch (key) {
			case 'name':
				return name;
			case 'email':
				return email;
			case 'phone':
				return phone;
			case 'message':
				return message;
		}
	}

	function setValue(key: string, value: string) {
		switch (key) {
			case 'name':
				name = value;
				break;
			case 'email':
				email = value;
				break;
			case 'phone':
				phone = value;
				break;
			case 'message':
				message = value;
				break;
		}
		clearError(key);
	}

	function clearError(field: string) {
		if (!errors[field]) return;
		const { [field]: _, ...rest } = errors;
		errors = rest;
	}

	function validate(): boolean {
		const next: Record<string, string> = {};

		if (!name.trim()) {
			next.name = 'Podaj imię i nazwisko.';
		}

		if (!email.trim()) {
			next.email = 'Podaj adres e-mail.';
		} else if (!EMAIL_RE.test(email.trim())) {
			next.email = 'Podaj poprawny adres e-mail.';
		}

		if (!phone.trim()) {
			next.phone = 'Podaj numer telefonu.';
		} else if (phone.replace(/\D/g, '').length < 9) {
			next.phone = 'Podaj poprawny numer telefonu (min. 9 cyfr).';
		}

		if (!message.trim()) {
			next.message = 'Podaj treść wiadomości.';
		}

		errors = next;
		return Object.keys(next).length === 0;
	}

	function buildWhatsAppMessage(): string {
		return `⚙️ Nowe zapytanie ze strony integra-automatyka.pl

👤 Imię i nazwisko: ${name.trim()}
📧 E-mail: ${email.trim()}
📞 Telefon: ${phone.trim()}
📝 Wiadomość: ${message.trim()}`;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		submitted = true;
		if (!validate()) return;

		const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
		window.open(url, '_blank', 'noopener,noreferrer');
	}

	const inputClass =
		'w-full rounded-xl border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40';
</script>

<section id="kontakt" class="border-t border-foreground/10 py-24 px-6 md:px-12 lg:px-24">
	<div class="mx-auto max-w-2xl">
		<div class="mb-12 text-center">
			<p class="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Kontakt</p>
			<h2 class="text-3xl font-bold text-foreground md:text-4xl">
				Napisz do <span class="text-accent">nas</span>
			</h2>
			<p class="mx-auto mt-4 max-w-xl text-foreground/60">
				Wypełnij formularz — otworzymy WhatsApp z gotową wiadomością. Odpowiemy tak szybko, jak to możliwe.
			</p>
		</div>

		<form
			onsubmit={handleSubmit}
			class="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 md:p-8
			       shadow-[0_0_30px_rgba(249,115,22,0.08)] ring-1 ring-foreground/5"
			novalidate
		>
			<div class="space-y-5">
				{#each fields as field}
					<div>
						<label for={field.id} class="mb-1.5 block text-sm font-medium text-foreground/80">
							{field.label}
							<span class="text-accent" aria-hidden="true">*</span>
						</label>
						<input
							id={field.id}
							type={field.type}
							name={field.key}
							autocomplete={field.autocomplete}
							placeholder={field.placeholder}
							required
							value={getValue(field.key)}
							oninput={(e) => setValue(field.key, e.currentTarget.value)}
							aria-invalid={submitted && !!errors[field.key]}
							aria-describedby={errors[field.key] ? `${field.id}-error` : undefined}
							class="{inputClass} {submitted && errors[field.key]
								? 'border-red-500/60 focus:ring-red-500/30'
								: 'border-foreground/10 focus:border-accent/50'}"
						/>
						{#if submitted && errors[field.key]}
							<p id="{field.id}-error" class="mt-1.5 text-sm text-red-400" role="alert">
								{errors[field.key]}
							</p>
						{/if}
					</div>
				{/each}

				<div>
					<label for="contact-message" class="mb-1.5 block text-sm font-medium text-foreground/80">
						Wiadomość
						<span class="text-accent" aria-hidden="true">*</span>
					</label>
					<textarea
						id="contact-message"
						name="message"
						rows="5"
						required
						placeholder="Opisz krótko, czego potrzebujesz…"
						value={message}
						oninput={(e) => setValue('message', e.currentTarget.value)}
						aria-invalid={submitted && !!errors.message}
						aria-describedby={errors.message ? 'contact-message-error' : undefined}
						class="{inputClass} resize-y min-h-[120px] {submitted && errors.message
							? 'border-red-500/60 focus:ring-red-500/30'
							: 'border-foreground/10 focus:border-accent/50'}"
					></textarea>
					{#if submitted && errors.message}
						<p id="contact-message-error" class="mt-1.5 text-sm text-red-400" role="alert">
							{errors.message}
						</p>
					{/if}
				</div>
			</div>

			<button
				type="submit"
				class="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-semibold text-white
				       shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
			>
				<MessageCircle size={20} aria-hidden="true" />
				Wyślij zapytanie przez WhatsApp
			</button>
		</form>
	</div>
</section>
