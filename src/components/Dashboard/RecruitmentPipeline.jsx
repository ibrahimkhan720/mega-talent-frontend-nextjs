"use client";

import { FileText, Users, ClipboardCheck, Video, Gift, MoreHorizontal } from "lucide-react";

const items = [
  ["New Applications", 428, 68, "purple", FileText],
  ["Screening", 286, 62, "blue", Users],
  ["Shortlisted", 164, 54, "green", ClipboardCheck],
  ["Interview", 86, 46, "orange", Video],
  ["Offer", 42, 38, "pink", Gift],
];

export default function RecruitmentPipeline() {
  return (
    <section className="dashboard-card pipeline-card">
      <div className="card-header">
        <div><h3>Recruitment Pipeline</h3><p>Current candidate pipeline</p></div>
        <button className="icon-button"><MoreHorizontal size={17} /></button>
      </div>

      <div className="pipeline-list">
        {items.map(([name, count, percent, tone, Icon]) => (
          <div className="pipeline-row" key={name}>
            <div className={`pipeline-icon ${tone}`}><Icon size={14} /></div>
            <div className="pipeline-label">{name}</div>
            <div className="pipeline-track"><span className={tone} data-width={percent} /></div>
            <strong>{count}</strong>
            <small>{percent}%</small>
          </div>
        ))}
      </div>
    </section>
  );
}
