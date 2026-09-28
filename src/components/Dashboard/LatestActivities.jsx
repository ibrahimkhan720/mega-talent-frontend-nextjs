"use client";

import { UserPlus, FileText, BriefcaseBusiness, CalendarCheck2, Mail } from "lucide-react";

const activities = [
  ["New candidate Ali Raza applied for Frontend Developer","2 hours ago",UserPlus,"purple"],
  ["Sara Ahmed moved to Screening stage","3 hours ago",FileText,"green"],
  ["New vacancy Product Manager created","Yesterday",BriefcaseBusiness,"orange"],
  ["Interview scheduled with Usman Tariq","1 day ago",CalendarCheck2,"blue"],
  ["Offer letter sent to Maria Khan","1 day ago",Mail,"pink"],
];

export default function LatestActivities() {
  return (
    <section className="dashboard-card">
      <div className="card-header compact"><div><h3>Latest Activities</h3><p>Recent platform activities</p></div><button className="view-button">View All</button></div>
      <div className="activities-list">
        {activities.map(([text,time,Icon,tone]) => (
          <div className="activity-row" key={text}>
            <div className={`activity-icon ${tone}`}><Icon size={14}/></div>
            <div><strong>{text}</strong><span><i className="live-dot" />{time}</span></div>
            <button className="dots">•••</button>
          </div>
        ))}
      </div>
    </section>
  );
}
