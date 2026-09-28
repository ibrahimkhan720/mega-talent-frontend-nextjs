"use client";

import { useEffect, useRef, useState } from "react";

import {
    LayoutDashboard,
    MessageSquare,
    BriefcaseBusiness,
    Users,
    CalendarDays,
    UserCheck,
    FileText,
    BarChart3,
    Settings,
    LifeBuoy,
    Sparkles,
    ChevronRight,
} from "lucide-react";


// =========================================================
// SIDEBAR MENU DATA
// =========================================================

const menuItems = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
    },

    {
        label: "Messages",
        icon: MessageSquare,
        children: [
            {
                label: "All Messages",
            },
            {
                label: "Unread Messages",
            },
            {
                label: "Sent Messages",
            },
        ],
    },

    {
        label: "Jobs",
        icon: BriefcaseBusiness,
        children: [
            {
                label: "All Jobs",
            },
            {
                label: "Open Jobs",
            },
            {
                label: "Draft Jobs",
            },
            {
                label: "Closed Jobs",
            },
            {
                label: "Job Categories",
                children: [
                    {
                        label: "Permanent",
                    },
                    {
                        label: "Temporary",
                    },
                    {
                        label: "Contract",
                    },
                ],
            },
        ],
    },

    {
        label: "Candidates",
        icon: Users,
        children: [
            {
                label: "All Candidates",
            },
            {
                label: "New Candidates",
            },
            {
                label: "Shortlisted",
            },
            {
                label: "Talent Pool",
            },
            {
                label: "Rejected",
            },
        ],
    },

    {
        label: "Interviews",
        icon: CalendarDays,
        children: [
            {
                label: "All Interviews",
            },
            {
                label: "Upcoming Interviews",
            },
            {
                label: "Completed Interviews",
            },
            {
                label: "Interview Types",
                children: [
                    {
                        label: "Technical",
                    },
                    {
                        label: "HR",
                    },
                    {
                        label: "Final Interview",
                    },
                ],
            },
        ],
    },

    {
        label: "Pre-Employment",
        icon: UserCheck,
        children: [
            {
                label: "Background Checks",
            },
            {
                label: "Right to Work",
            },
            {
                label: "References",
            },
            {
                label: "Documents",
            },
        ],
    },

    {
        label: "Templates",
        icon: FileText,
        children: [
            {
                label: "Email Templates",
            },
            {
                label: "Document Templates",
            },
            {
                label: "Interview Templates",
            },
            {
                label: "Offer Templates",
            },
        ],
    },

    {
        label: "Reports",
        icon: BarChart3,
        children: [
            {
                label: "Recruitment Reports",
            },
            {
                label: "Candidate Reports",
            },
            {
                label: "Interview Reports",
            },
            {
                label: "Job Reports",
            },
        ],
    },

    // =====================================================
    // SETTINGS
    // =====================================================

    {
        label: "Settings",
        icon: Settings,
        children: [
            {
                label: "Company Profile",
                children: [
                    {
                        label: "Company Settings",
                    },
                    {
                        label: "Locations",
                    },
                    {
                        label: "Team",
                    },
                    {
                        label: "Custom Sources",
                    },
                    {
                        label: "Agencies",
                    },
                    {
                        label: "Integrations",
                    },
                ],
            },

            {
                label: "Diversity Charter",
            },

            {
                label: "Shortlisting",
            },

            {
                label: "Job Tracking",
            },

            {
                label: "Reference Settings",
            },

            {
                label: "Authentication Settings",
            },

            {
                label: "Advanced Settings",
            },
        ],
    },

    {
        label: "Support",
        icon: LifeBuoy,
        children: [
            {
                label: "Help Centre",
            },
            {
                label: "Contact Support",
            },
            {
                label: "Documentation",
            },
        ],
    },
];


// =========================================================
// FLYOUT MENU
// =========================================================

function FlyoutMenu({
    items,
    level,
    anchorRef,
    openPath,
    setOpenPath,
}) {
    const [position, setPosition] = useState({
        top: 0,
        left: 0,
    });


    // =====================================================
    // CALCULATE DROPDOWN POSITION
    // =====================================================

    useEffect(() => {
        const updatePosition = () => {
            const anchor = anchorRef?.current;

            if (!anchor) {
                return;
            }

            const rect =
                anchor.getBoundingClientRect();

            const dropdownWidth = 240;

            const itemHeight = 45;

            const dropdownPadding = 16;

            const estimatedHeight = Math.min(
                items.length * itemHeight +
                    dropdownPadding,

                window.innerHeight - 20
            );


            // ---------------------------------------------
            // DEFAULT POSITION
            // ---------------------------------------------

            let top = rect.top;

            let left = rect.right;


            // ---------------------------------------------
            // KEEP DROPDOWN INSIDE BOTTOM
            // ---------------------------------------------

            if (
                top + estimatedHeight >
                window.innerHeight - 10
            ) {
                top =
                    window.innerHeight -
                    estimatedHeight -
                    10;
            }


            // ---------------------------------------------
            // KEEP DROPDOWN INSIDE TOP
            // ---------------------------------------------

            if (top < 10) {
                top = 10;
            }


            // ---------------------------------------------
            // MAIN RULE:
            // ALWAYS OPEN TO THE RIGHT
            // ---------------------------------------------

            left = rect.right;


            // ---------------------------------------------
            // ONLY IF SCREEN IS TOO SMALL
            // KEEP IT VISIBLE
            // ---------------------------------------------

            if (
                left + dropdownWidth >
                document.documentElement.clientWidth
            ) {
                left =
                    Math.max(
                        0,
                        document.documentElement.clientWidth -
                            dropdownWidth
                    );
            }


            setPosition({
                top,
                left,
            });
        };


        updatePosition();


        window.addEventListener(
            "resize",
            updatePosition
        );


        window.addEventListener(
            "scroll",
            updatePosition,
            true
        );


        return () => {
            window.removeEventListener(
                "resize",
                updatePosition
            );

            window.removeEventListener(
                "scroll",
                updatePosition,
                true
            );
        };
    }, [anchorRef, items.length]);


    return (
        <div
            className={`sidebar-flyout sidebar-flyout-level-${level}`}
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
            }}
        >
            {items.map((item) => (
                <FlyoutItem
                    key={item.label}
                    item={item}
                    level={level}
                    openPath={openPath}
                    setOpenPath={setOpenPath}
                />
            ))}
        </div>
    );
}


// =========================================================
// FLYOUT ITEM
// =========================================================

function FlyoutItem({
    item,
    level,
    openPath,
    setOpenPath,
}) {
    const buttonRef = useRef(null);


    const hasChildren =
        Array.isArray(item.children) &&
        item.children.length > 0;


    const isOpen =
        openPath[level + 1] === item.label;


    // =====================================================
    // HANDLE FLYOUT CLICK
    // =====================================================

    const handleClick = (event) => {
        event.stopPropagation();


        // ---------------------------------------------
        // NORMAL MENU ITEM
        // ---------------------------------------------

        if (!hasChildren) {
            setOpenPath(
                openPath.slice(0, level + 1)
            );

            return;
        }


        // ---------------------------------------------
        // CLOSE CURRENT CHILD
        // ---------------------------------------------

        if (isOpen) {
            setOpenPath(
                openPath.slice(0, level + 1)
            );

            return;
        }


        // ---------------------------------------------
        // OPEN CHILD
        // ---------------------------------------------

        setOpenPath([
            ...openPath.slice(0, level + 1),
            item.label,
        ]);
    };


    return (
        <div className="sidebar-flyout-item-wrapper">

            <button
                ref={buttonRef}
                type="button"
                className={`
                    sidebar-flyout-item
                    ${isOpen ? "active" : ""}
                `}
                onClick={handleClick}
            >
                <span>
                    {item.label}
                </span>


                {hasChildren && (
                    <ChevronRight
                        size={16}
                        strokeWidth={1.8}
                    />
                )}
            </button>


            {/* =================================================
                NESTED DROPDOWN
            ================================================= */}

            {hasChildren && isOpen && (
                <FlyoutMenu
                    items={item.children}
                    level={level + 1}
                    anchorRef={buttonRef}
                    openPath={openPath}
                    setOpenPath={setOpenPath}
                />
            )}

        </div>
    );
}


// =========================================================
// MAIN SIDEBAR
// =========================================================

export default function Sidebar() {

    const [openPath, setOpenPath] =
        useState([]);


    const [activeMenu, setActiveMenu] =
        useState("Dashboard");


    const mainButtonRefs =
        useRef({});


    // =====================================================
    // MAIN MENU CLICK
    // =====================================================

    const handleMainClick = (
        item,
        event
    ) => {
        event.stopPropagation();


        const hasChildren =
            Array.isArray(item.children) &&
            item.children.length > 0;


        setActiveMenu(item.label);


        // ---------------------------------------------
        // NORMAL MENU
        // ---------------------------------------------

        if (!hasChildren) {
            setOpenPath([]);

            return;
        }


        // ---------------------------------------------
        // TOGGLE DROPDOWN
        // ---------------------------------------------

        if (
            openPath[0] === item.label
        ) {
            setOpenPath([]);
        } else {
            setOpenPath([
                item.label,
            ]);
        }
    };


    // =====================================================
    // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    // =====================================================

    useEffect(() => {
        const handleOutsideClick = () => {
            setOpenPath([]);
        };


        document.addEventListener(
            "click",
            handleOutsideClick
        );


        return () => {
            document.removeEventListener(
                "click",
                handleOutsideClick
            );
        };
    }, []);


    return (
        <aside className="sidebar">


            {/* =================================================
                SIDEBAR MAIN
            ================================================= */}

            <div className="sidebar-main">


                {/* =============================================
                    BRAND
                ============================================== */}

                <div className="brand">

                    <div className="brand-mark">
                        <Sparkles size={20} />
                    </div>


                    <div className="brand-text">

                        <strong>
                            Mega
                        </strong>

                        <span>
                            Talent
                        </span>

                    </div>

                </div>


                {/* =============================================
                    MAIN MENU LABEL
                ============================================== */}

                <div className="nav-section-label">
                    MAIN MENU
                </div>


                {/* =============================================
                    NAVIGATION
                ============================================== */}

                <nav className="sidebar-nav">

                    {menuItems.map((item) => {

                        const hasChildren =
                            Array.isArray(
                                item.children
                            ) &&
                            item.children.length > 0;


                        const isOpen =
                            openPath[0] ===
                            item.label;


                        return (
                            <div
                                className="sidebar-main-item"
                                key={item.label}
                            >

                                {/* =================================
                                    MAIN MENU BUTTON
                                ================================== */}

                                <button
                                    ref={(element) => {
                                        mainButtonRefs.current[
                                            item.label
                                        ] = element;
                                    }}
                                    type="button"
                                    className={`
                                        nav-item
                                        ${
                                            activeMenu ===
                                            item.label
                                                ? "active"
                                                : ""
                                        }
                                        ${
                                            isOpen
                                                ? "dropdown-open"
                                                : ""
                                        }
                                    `}
                                    onClick={(event) =>
                                        handleMainClick(
                                            item,
                                            event
                                        )
                                    }
                                >

                                    <item.icon
                                        size={18}
                                        strokeWidth={1.8}
                                    />


                                    <span>
                                        {item.label}
                                    </span>


                                    {hasChildren && (
                                        <ChevronRight
                                            size={16}
                                            strokeWidth={1.8}
                                            className={
                                                isOpen
                                                    ? "main-arrow-open"
                                                    : ""
                                            }
                                        />
                                    )}

                                </button>


                                {/* =================================
                                    MAIN DROPDOWN
                                ================================== */}

                                {hasChildren &&
                                    isOpen && (
                                        <FlyoutMenu
                                            items={
                                                item.children
                                            }
                                            level={0}
                                            anchorRef={{
                                                current:
                                                    mainButtonRefs
                                                        .current[
                                                            item.label
                                                        ],
                                            }}
                                            openPath={
                                                openPath
                                            }
                                            setOpenPath={
                                                setOpenPath
                                            }
                                        />
                                    )}

                            </div>
                        );
                    })}

                </nav>

            </div>


            {/* =================================================
                SIDEBAR BOTTOM
            ================================================= */}

            <div className="sidebar-bottom">


                {/* =============================================
                    SUPPORT
                ============================================== */}

                <div className="support-card">

                    <div className="support-icon">
                        <LifeBuoy size={18} />
                    </div>


                    <div className="support-copy">

                        <strong>
                            Need Help?
                        </strong>

                        <span>
                            Get support from our team anytime.
                        </span>

                    </div>


                    <span className="support-arrow">
                        ↗
                    </span>

                </div>


                {/* =============================================
                    USER
                ============================================== */}

                <div className="sidebar-user">

                    <div className="sidebar-avatar">
                        FK
                    </div>


                    <div className="sidebar-user-info">

                        <strong>
                            Fahim Khan
                        </strong>

                        <span>
                            Super Admin
                        </span>

                    </div>

                </div>

            </div>

        </aside>
    );
}