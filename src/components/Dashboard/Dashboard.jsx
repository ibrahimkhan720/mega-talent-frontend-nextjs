"use client";

import { useEffect } from "react";
import { CalendarDays, ChevronDown, Plus } from "lucide-react";

import StatsCards from "./StatsCards";
import ApplicationsOverview from "./ApplicationsOverview";
import RecruitmentPipeline from "./RecruitmentPipeline";
import RecentCandidates from "./RecentCandidates";
import UpcomingInterviews from "./UpcomingInterviews";
import RecentVacancies from "./RecentVacancies";
import TasksReminders from "./TasksReminders";
import LatestActivities from "./LatestActivities";

export default function Dashboard() {
    useEffect(() => {
        let mounted = true;
        let cleanup = null;

        async function runAnimations() {
            // jQuery is loaded ONLY in the browser
            const jqueryModule = await import("jquery");

            if (!mounted) return;

            const $ = jqueryModule.default;

            /* =========================================
               PAGE ENTRANCE ANIMATION
            ========================================= */

            $(".hero-header, .stat-card, .dashboard-card").each(function (i) {
                $(this).css({
                    opacity: 0,
                    transform: "translateY(18px)",
                });

                $(this)
                    .delay(80 + i * 55)
                    .animate(
                        {
                            opacity: 1,
                        },
                        {
                            duration: 550,
                            step: function (now) {
                                const y = 18 * (1 - now);

                                $(this).css(
                                    "transform",
                                    `translateY(${y}px)`
                                );
                            },
                        }
                    );
            });

            /* =========================================
               NUMBER COUNTER
            ========================================= */

            $(".count-number").each(function () {
                const $el = $(this);
                const target = Number($el.data("target"));

                $({ value: 0 }).animate(
                    {
                        value: target,
                    },
                    {
                        duration: 1300,
                        easing: "swing",

                        step: function () {
                            $el.text(
                                Math.floor(this.value).toLocaleString()
                            );
                        },

                        complete: function () {
                            $el.text(target.toLocaleString());
                        },
                    }
                );
            });

            /* =========================================
               PIPELINE PROGRESS
            ========================================= */

            $(".pipeline-track span").each(function () {
                const $bar = $(this);
                const width = Number($bar.data("width"));

                $bar.css("width", "0%");

                $bar
                    .delay(450)
                    .animate(
                        {
                            width: `${width}%`,
                        },
                        1100
                    );
            });

            /* =========================================
               APPLICATION CHART DRAW
            ========================================= */

            $(".chart-line-svg .line-path").each(function () {
                const length = this.getTotalLength();

                $(this).css({
                    strokeDasharray: length,
                    strokeDashoffset: length,
                });

                $(this).animate(
                    {
                        strokeDashoffset: 0,
                    },
                    1600
                );
            });

            /* =========================================
               CANDIDATE ROW ANIMATION
            ========================================= */

            $(".candidates-table tbody tr").each(function (i) {
                $(this).css({
                    opacity: 0,
                    transform: "translateX(-12px)",
                });

                $(this)
                    .delay(700 + i * 100)
                    .animate(
                        {
                            opacity: 1,
                        },
                        {
                            duration: 450,

                            step: function (now) {
                                $(this).css(
                                    "transform",
                                    `translateX(${12 * (1 - now)}px)`
                                );
                            },
                        }
                    );
            });

            /* =========================================
               CARD HOVER
            ========================================= */

            $(".stat-card, .dashboard-card")
                .on("mouseenter.dashboard", function () {
                    $(this).stop(true).animate(
                        {
                            top: "-3px",
                        },
                        180
                    );
                })
                .on("mouseleave.dashboard", function () {
                    $(this).stop(true).animate(
                        {
                            top: "0px",
                        },
                        180
                    );
                });

            /* =========================================
               FLOATING HERO GLOW
            ========================================= */

            const floatTimer = setInterval(() => {
                $(".glow-one")
                    .animate({ top: "-95px" }, 1800)
                    .animate({ top: "-105px" }, 1800);

                $(".glow-two")
                    .animate({ top: "-80px" }, 2200)
                    .animate({ top: "-90px" }, 2200);
            }, 100);

            /* =========================================
               ACTIVITY LIVE DOT
            ========================================= */

            const pulseTimer = setInterval(() => {
                $(".live-dot")
                    .stop(true)
                    .animate({ opacity: 0.25 }, 400)
                    .animate({ opacity: 1 }, 400);
            }, 1400);

            cleanup = () => {
                clearInterval(floatTimer);
                clearInterval(pulseTimer);

                $(".stat-card, .dashboard-card").off(
                    ".dashboard"
                );

                $(".hero-header, .stat-card, .dashboard-card")
                    .stop(true, true)
                    .css({
                        opacity: "",
                        transform: "",
                    });
            };
        }

        runAnimations();

        return () => {
            mounted = false;

            if (cleanup) {
                cleanup();
            }
        };
    }, []);

    return (
        <div className="dashboard">

            {/* =========================
                HERO
            ========================= */}

            <div className="hero-header">

                <div className="hero-glow glow-one" />
                <div className="hero-glow glow-two" />

                <div>
                    <span className="eyebrow">
                        OVERVIEW
                    </span>

                    <h1>
                        Good morning, Fahim{" "}
                        <span className="wave">
                            👋
                        </span>
                    </h1>

                    <p>
                        Here's what's happening with your recruitment today.
                    </p>
                </div>

                <div className="hero-actions">

                    <button className="date-button">
                        <CalendarDays size={15} />

                        Sep 1, 2026 – Sep 30, 2026

                        <ChevronDown size={14} />
                    </button>

                    <button className="primary-button">
                        <Plus size={16} />

                        Add New
                    </button>

                </div>
            </div>

            {/* =========================
                STATS
            ========================= */}

            <StatsCards />

            {/* =========================
                ANALYTICS
            ========================= */}

            <div className="analytics-grid">

                <ApplicationsOverview />

                <RecruitmentPipeline />

            </div>

            {/* =========================
                CANDIDATES
            ========================= */}

            <RecentCandidates />

            {/* =========================
                BOTTOM
            ========================= */}

            <div className="bottom-grid">

                <UpcomingInterviews />

                <RecentVacancies />

                <TasksReminders />

                <LatestActivities />

            </div>

        </div>
    );
}