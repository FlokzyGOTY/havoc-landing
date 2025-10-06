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

export const AskForm: React.FC = () => {
    return (
        <form className="form-ask wow fadeInUp">
            <div className="form-content">
                <input className="style-2" type="text" placeholder="Ask a follow up..." />

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
