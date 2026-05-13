export const SITE_DATA = {
	name: 'Integra Automatyka – Jakub Pieczka',
	serviceArea: 'całej Polski',
	contact: {
		address: 'ul. Owocowa 4, 44-360 Buków',
		addressWorkshop: 'ul. Stalowa 10, 47-400 Racibórz',
		bankAccount: '97 1050 1344 1000 0090 8432 1117',
		nip: '6472610507',
		phone: '+48 530 934 510',
		email: 'kontakt@integra-automatyka.pl'
	},
	services: [
		{
			title: 'Doradztwo techniczne',
			description:
				'Profesjonalne konsultacje z zakresu elektryki i automatyki przemysłowej, dopasowane do specyfiki Twojego zakładu. Pomagamy dobrać optymalne rozwiązania techniczne i zminimalizować ryzyko inwestycyjne.'
		},
		{
			title: 'Prowadzenie inwestycji automatyki przemysłowej',
			description:
				'Kompleksowe zarządzanie projektami automatyzacji od koncepcji po uruchomienie i odbiór końcowy. Koordynujemy prace zespołów, harmonogramy i budżety, dbając o terminową realizację.'
		},
		{
			title: 'Utrzymanie ruchu',
			description:
				'Zapewniamy ciągłość działania linii produkcyjnych poprzez diagnostykę, konserwację i szybkie usuwanie awarii. Nasze podejście prewencyjne minimalizuje przestoje i koszty napraw.'
		},
		{
			title: 'Projektowanie układów sterowania',
			description:
				'Tworzymy kompletną dokumentację projektową układów sterowania zgodną z obowiązującymi normami. Każdy projekt jest indywidualnie dopasowany do wymagań procesu technologicznego.'
		},
		{
			title: 'Montaż szaf sterowniczych',
			description:
				'Budujemy szafy sterownicze według najwyższych standardów jakości i bezpieczeństwa. Stosujemy sprawdzone komponenty renomowanych producentów z pełną dokumentacją powykonawczą.'
		},
		{
			title: 'Pomiary i badania elektryczne',
			description:
				'Wykonujemy pełen zakres pomiarów ochronnych i kontrolnych instalacji elektrycznych. Dostarczamy protokoły pomiarowe zgodne z obowiązującymi przepisami i normami PN-EN.'
		},
		{
			title: 'Optymalizacja procesów',
			description:
				'Analizujemy istniejące procesy produkcyjne i wdrażamy usprawnienia zwiększające wydajność i obniżające koszty. Wykorzystujemy dane procesowe do identyfikacji wąskich gardeł i potencjału oszczędności.'
		},
		{
			title: 'Programowanie PLC, HMI, SCADA',
			description:
				'Programujemy sterowniki PLC, panele operatorskie HMI oraz systemy wizualizacji SCADA wiodących producentów. Tworzymy intuicyjne interfejsy operatorskie i niezawodną logikę sterowania.'
		}
	],
	projects: [
		{
			title: 'Modernizacja linii produkcyjnej',
			category: 'Automatyka',
			image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
		},
		{
			title: 'Montaż szaf sterowniczych',
			category: 'Elektryka',
			image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop'
		},
		{
			title: 'System SCADA dla zakładu chemicznego',
			category: 'Programowanie',
			image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop'
		},
		{
			title: 'Pomiary elektryczne hali magazynowej',
			category: 'Pomiary',
			image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop'
		},
		{
			title: 'Optymalizacja procesu pakowania',
			category: 'Automatyka',
			image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop'
		},
		{
			title: 'Programowanie sterowników PLC',
			category: 'Programowanie',
			image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&h=400&fit=crop'
		}
	]
} as const;
