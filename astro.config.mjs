import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import dynamicImport from 'astro-dynamic-import';
import cookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost/',
	integrations: [
		react(),
		sitemap(),
		dynamicImport(),
		cookieconsent({
			guiOptions: {
				consentModal: {
					layout: 'cloud',
					position: 'bottom center',
					equalWeightButtons: true,
					flipButtons: false,
				},
				preferencesModal: {
					layout: "box",
					position: "right",
					equalWeightButtons: true,
					flipButtons: false,
				},
			},
			categories: {
				necessary: {
					enabled: true,  // this category is enabled by default
					readOnly: true  // this category cannot be disabled
				},
				analytics: {}
			},

			language: {
				default: 'en',
				translations: {
					en: {
						consentModal: {
							title: 'We use cookies',
							description: 'Cookie modal description',
							acceptAllBtn: 'Accept all',
							acceptNecessaryBtn: 'Reject all',
							showPreferencesBtn: 'Manage Individual preferences'
						},
						preferencesModal: {
							title: 'Manage cookie preferences',
							acceptAllBtn: 'Accept all',
							acceptNecessaryBtn: 'Reject all',
							savePreferencesBtn: 'Accept current selection',
							closeIconLabel: 'Close modal',
							sections: [
								{
									title: 'Somebody said ... cookies?',
									description: 'I want one!'
								},
								{
									title: 'Strictly Necessary cookies',
									description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

									//this field will generate a toggle linked to the 'necessary' category
									linkedCategory: 'necessary'
								},
								{
									title: 'Performance and Analytics',
									description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
									linkedCategory: 'analytics'
								},
								{
									title: 'More information',
									description: 'For any queries in relation to my policy on cookies and your choices, please <a href="contact-us">contact us</a>'
								}
							]
						}
					},
					pl: {
						consentModal: {
							title: 'Używamy ciasteczek',
							description: 'Opis okna',
							acceptAllBtn: 'Akceptuj wszystkie',
							acceptNecessaryBtn: 'Odrzuć wszystkie',
							showPreferencesBtn: 'Zarządzaj ustawieniami'
						},
						preferencesModal: {
							title: 'Zarządzaj ustawieniami',
							acceptAllBtn: 'Akceptuj wszystkie',
							acceptNecessaryBtn: 'Odrzuć wszystkie',
							savePreferencesBtn: 'Akceptuj wybór',
							closeIconLabel: 'Zamknij okno',
							sections: [
								{
									title: 'Ktoś powiedział... ciasteczka?',
									description: 'Chcę jedno!'
								},
								{
									title: 'Niezbędne ciasteczka',
									description: 'Te ciasteczka są niezbędne do poprawnego funkcjonowania strony i nie mogą zostać wyłączone',

									//this field will generate a toggle linked to the 'necessary' category
									linkedCategory: 'necessary'
								},
								{
									title: 'Wydajność i analityka',
									description: 'Te ciasteczka zbierają informację o tym jak używasz naszej strony. Wszystkie dane są zanonimizowane i nie mogę być użyte do zidentyfikowania ciebie',
									linkedCategory: 'analytics'
								},
								{
									title: 'Więcej informacji',
									description: 'Jeśli masz jakieś pytania w związku z naszą polityką poprawności, <a href="contact-us">skontaktuj się</a> z nami'
								}
							]
						}
					}
				}
			}
		}),
	],
	image: {
		remotePatterns: [{ protocol: "https" }],
	}
});
