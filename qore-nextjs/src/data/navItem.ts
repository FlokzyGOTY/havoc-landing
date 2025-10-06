export interface NavItem {
    name: string;
    link: string;
    subMenu?: SubMenuItem[];
}

export interface SubMenuItem {
    subName: string;
    subLink: string;
}
export const navItems: NavItem[] = [
    {
        name: "Features",
        link: "features",
    },
    {
        name: "How to use",
        link: "howToUse",
    },
    {
        name: "Pricing",
        link: "pricing",
    },
    {
        name: "FAQs",
        link: "FAQs",
    },
];

export const navItems2: NavItem[] = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Pricing",
        link: "pricing",
    },
    {
        name: "Use Cases",
        link: "#",
        subMenu: [
            {
                subName: "All Use Cases",
                subLink: "use-case",
            },
            {
                subName: "Lead Qualification",
                subLink: "use-case-detail",
            },
        ],
    },
    {
        name: "Company",
        link: "#",
        subMenu: [
            {
                subName: "About Us",
                subLink: "about-us",
            },
            {
                subName: "Contact Us",
                subLink: "contact-us",
            },
        ],
    },
    {
        name: "FAQs",
        link: "faq",
    },
];
