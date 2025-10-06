// data/plans.ts
export interface PlanFeature {
    text: string;
}

export interface Plan {
    id: string;
    name: string;
    price: string;
    duration: string;
    description: string;
    buttonClass: string;
    features: PlanFeature[];
    image: string;
    typeClass?: string;
}

export const plans: Plan[] = [
    {
        id: "free",
        name: "Starter",
        price: "$0",
        duration: "forever",
        description: "Perfect for solo sales reps testing automation.",
        buttonClass: "style-3",
        image: "/assets/images/section/color-bg-3.webp",
        features: [{ text: "100 AI automations / mo" }, { text: "Up to 500 contacts" }, { text: "3 active workflows" }, { text: "Basic CRM features" }, { text: "Email support" }],
    },
    {
        id: "plus",
        name: "Professional",
        price: "$49",
        duration: "per user / mo",
        description: "For growing sales teams that need more power.",
        buttonClass: "style-2",
        image: "/assets/images/section/color-bg-3.webp",
        typeClass: "type-2",
        features: [
            { text: "1,000 AI automations / mo" },
            { text: "Unlimited contacts & deals" },
            { text: "Unlimited workflows" },
            { text: "Advanced AI models" },
            { text: "CRM integrations" },
            { text: "Priority support" },
        ],
    },
    {
        id: "pro",
        name: "Enterprise",
        price: "$149",
        duration: "per user / mo",
        description: "Everything unlimited. For high-performing teams.",
        buttonClass: "style-3",
        image: "/assets/images/section/color-bg-3.webp",
        features: [
            { text: "Unlimited AI automations" },
            { text: "Unlimited everything" },
            { text: "All AI models & features" },
            { text: "Custom integrations" },
            { text: "API access" },
            { text: "Dedicated account manager" },
        ],
    },
];
