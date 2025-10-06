interface stepItem {
    id: string;
    number: string;
    title: string;
    desc: string;
    image: string;
}

export const stepItems: stepItem[] = [
    {
        id: "step1",
        number: "STEP 01",
        title: "Import your leads",
        desc: "Connect your CRM, upload a CSV, or integrate with lead sources. Havoc syncs your contacts and deals automatically.",
        image: "step-1.webp",
    },
    {
        id: "step2",
        number: "STEP 02",
        title: "Build sales workflows",
        desc: "Use the visual builder to create AI-powered sales automation. Qualify leads, schedule follow-ups, and manage your pipeline.",
        image: "step-2.webp",
    },
    {
        id: "step3",
        number: "STEP 03",
        title: "Close more deals",
        desc: "Let AI agents handle repetitive tasks while you focus on closing. Track performance and optimize your sales process.",
        image: "step-3.webp",
    },
];
