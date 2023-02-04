export interface IFooterLink {
	title: string;
	links: {
		name: string;
		href: string;
	}[];
}

export const footerLinks: IFooterLink[] = [
	{
		title: "Category",
		links: [
			{ name: "Home", href: "/" },
			{ name: "About", href: "/about" },
			{ name: "Company", href: "/company" },
			{ name: "Early Access Registeration", href: "/register" },
			// { name: "Blog", href: "/blog" },
			// { name: "Contact", href: "/contact" },
			// { name: "Carrers", href: "/carrers" },
			// { name: "Press", href: "/press" },
			// { name: "Social Impact", href: "/social-impact" },
		],
	},
	// {
	// 	title: "Safety",
	// 	links: [
	// 		{ name: "Community Guidelines", href: "/community-guidelines" },
	// 		{ name: "Safety Tips", href: "/safety-tips" },
	// 		{ name: "Safety Policy", href: "/community-guidelines" },
	// 		{ name: "Safety Reporting", href: "/community-guidelines" },
	// 		{ name: "Security", href: "/community-guidelines" },
	// 	],
	// },
	{
		title: "FAQ",
		links: [
			{ name: "FAQs", href: "/faq" },
			{ name: "Safety Measures", href: "/safety" },
		],
	},
	{
		title: "Support",
		links: [
			{ name: "Help Center", href: "/faq#help" },
			{ name: "Contact Us", href: "/faq#contact" },
			{ name: "Privacy Policy", href: "/privacy" },
			// { name: "Terms of Service", href: "/tos" },
			// { name: "Legal", href: "/tos" },
			// { name: "Status", href: "/tos" },
			// { name: "Customer Stories", href: "/tos" },
		],
	},
];
