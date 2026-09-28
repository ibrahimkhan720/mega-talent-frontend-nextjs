"use client";

import { Users, BriefcaseBusiness, FileText, CalendarDays, MoreHorizontal, TrendingUp } from "lucide-react";

const stats = [
  ["Total Candidates", 2847, "+12.5%", Users, "purple"],
  ["Active Vacancies", 184, "+8.2%", BriefcaseBusiness, "blue"],
  ["Applications", 1294, "+18.4%", FileText, "green"],
  ["Interviews", 86, "+6.7%", CalendarDays, "orange"],
];

export default function StatsCards() {
  return (
    <div className="stats-grid">
      {stats.map(([title, value, change, Icon, tone]) => (
        <div className="stat-card" key={title}>
          <div className="stat-top">
            <div className={`stat-icon ${tone}`}><Icon size={19} /></div>
            <button className="icon-button"><MoreHorizontal size={17} /></button>
          </div>
          <div className="stat-content">
            <span>{title}</span>
            <div className="stat-number-row">
              <strong className="count-number" data-target={value}>0</strong>
              <em><TrendingUp size={10} /> {change}</em>
            </div>
            <small>vs last month</small>
          </div>
          <div className={`mini-spark ${tone}`}>
            <i /><i /><i /><i /><i />
          </div>
        </div>
      ))}
    </div>
  );
}
