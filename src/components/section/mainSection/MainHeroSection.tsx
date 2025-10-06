"use client";
import { assitantsAiItems } from "@/src/data/assitantsAi";
import { useEffect, useState } from "react";

export function MainHeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % assitantsAiItems.length);
        }, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="sect-main">
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h1 className="s-title font-3">
                            Automate Sales. Close More Deals. <br />
                            <div className="text-change_wrap">
                                {assitantsAiItems.map((item, idx) => (
                                    <div key={idx} className={`text-change_rotating  ${idx === index ? "active" : ""}`}>
                                        Powered by<span className={`icon ${item.icon}`}></span>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </h1>
                        <p className="s-sub_title">
                            AI agents that qualify leads, manage your pipeline, and automate follow-ups — <br className="d-none d-sm-block" />
                            so your sales team can focus on closing deals.
                        </p>
                    </div>
                </div>
                <span className="br-line"></span>
                <div className="container">
                    <div className="sect-content position-relative">
                        <BoxAskWrap />
                    </div>
                </div>
            </div>
        </>
    );
}

export function BoxAskWrap() {
    return (
        <>
            <div className="box-ask-wrap">
                <div className="box-ask">
                    <AskForm />
                </div>
                <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                <span className="hafl-plus pst-left_top item_top wow bounceInScale"></span>
                <span className="hafl-plus pst-right_top item_top wow bounceInScale"></span>
            </div>
        </>
    );
}

const mockQueries = [
    "Show me leads from last week...",
    "Which deals are closing this month?...",
    "Schedule follow-up for top prospects...",
    "What's my conversion rate this quarter?...",
    "Find all unqualified leads...",
];

export const AskForm: React.FC = () => {
    const [placeholder, setPlaceholder] = useState("");
    const [queryIndex, setQueryIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentQuery = mockQueries[queryIndex];
        const typingSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex < currentQuery.length) {
            // Typing forward
            const timeout = setTimeout(() => {
                setPlaceholder(currentQuery.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else if (!isDeleting && charIndex === currentQuery.length) {
            // Pause before deleting
            const timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1500);
            return () => clearTimeout(timeout);
        } else if (isDeleting && charIndex > 0) {
            // Deleting backward
            const timeout = setTimeout(() => {
                setPlaceholder(currentQuery.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else if (isDeleting && charIndex === 0) {
            // Move to next query
            setIsDeleting(false);
            setQueryIndex((queryIndex + 1) % mockQueries.length);
        }
    }, [charIndex, queryIndex, isDeleting]);

    return (
        <form className="form-ask wow fadeInUp">
            <div className="form-content">
                <input className="style-2" type="text" placeholder={placeholder} />

                <fieldset className="field-bottom">
                    <div className="field_left">
                        <button type="button" className="btn-ip type-circle ip-add">
                            <i className="icon icon-plus" />
                        </button>
                    </div>

                    <div className="field_right">
                        <button type="button" className="btn-ip type-transparent ip-voice">
                            <i className="icon icon-micro" />
                        </button>

                        <button type="submit" className="btn-submit btn-ip type-circle">
                            <i className="icon icon-arrow-top" />
                        </button>
                    </div>
                </fieldset>
            </div>
        </form>
    );
};
