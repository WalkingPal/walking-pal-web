export interface IFooterLink {
  title: string
  links: {
    name: string
    href: string
  } []
}

export const footerLinks: IFooterLink[] = [
	{
		title: "Category",
    links: [
      {
        name: 'About',
        href: '/about'
      },
      {
        name: 'Blog',
        href: '/blog'
      },
      {
        name: 'Contact',
        href: '/contact'
      },
      {
        name: 'Carriers',
        href: '/carriers'
      },
      {
        name: 'Our Team',
        href: '/team'
      },
      {
        name: 'Press',
        href: '/press'
      },
      {
        name: 'Social Impact',
        href: '/social-impact'
      },
    ]
	},
  {
    title: 'Safety',
    links: [
      {
        name: 'Community Guidelines',
        href: '/community-guidelines'
      },
      {
        name: 'Safety Tips',
        href: '/safety-tips'
      },
      {
        name: 'Safety Policy',
        href: '/community-guidelines'
      },
      {
        name: 'Safety Reporting',
        href: '/community-guidelines'
      },
      {
        name: 'Security',
        href: '/community-guidelines'
      },
    ]
  },
  {
    title: 'FAQ',
    links: [
      {
        name: 'Product',
        href: '/faq/product'
      },
      {
        name: 'Safety Measures',
        href: '/faq/safety-measures'
      }
    ]
  },
  {
    title: 'Support',
    links: [
      {
        name: 'Terms of Service',
        href: '/tos'
      },
      {
        name: 'Legal',
        href: '/tos'
      },
      {
        name: 'Privacy Policy',
        href: '/tos'
      },
      {
        name: 'Status',
        href: '/tos'
      },
      {
        name: 'Customer Stories',
        href: '/tos'
      },
    ]
  }
];
