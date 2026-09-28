"use client";

import { MoreHorizontal, TrendingUp } from "lucide-react";

export default function ApplicationsOverview() {
  return (
    <section className="dashboard-card applications-card">
      <div className="card-header">
        <div>
          <h3>Applications Overview</h3>
          <p>Application activity over the last 6 months</p>
        </div>
        <div className="chart-actions">
          <button className="icon-button"><MoreHorizontal size={17} /></button>
          <select defaultValue="6">
            <option value="6">Last 6 months</option>
            <option value="12">Last 12 months</option>
          </select>
        </div>
      </div>

      <div className="line-chart">
        <div className="chart-y">
          <span>1,000</span><span>750</span><span>500</span><span>250</span><span>0</span>
        </div>
        <div className="chart-main">
          <div className="chart-grid-lines"><i /><i /><i /><i /><i /></div>
          <svg className="chart-line-svg" viewBox="0 0 600 250" preserveAspectRatio="none">
            <path className="area-path" d="M20 190 C90 175 110 175 130 160 S220 145 240 125 S325 110 350 105 S430 112 455 98 S530 55 580 45 L580 220 L20 220 Z" />
            <path className="line-path" d="M20 190 C90 175 110 175 130 160 S220 145 240 125 S325 110 350 105 S430 112 455 98 S530 55 580 45" />
            {[20,130,240,350,455,580].map((x, i) => (
              <circle key={i} cx={x} cy={[190,160,125,105,98,45][i]} r="5" />
            ))}
          </svg>
          <div className="chart-labels"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div>
          <div className="chart-tooltip">
            <strong>September 2026</strong>
            <span><i /> Applications <b>864</b></span>
            <small><TrendingUp size={10} /> +22% vs Aug</small>
          </div>
        </div>
      </div>

      <div className="chart-summary">
        <span><i /> Applications</span>
        <strong>1,294 total applications</strong>
      </div>
    </section>
  );
}
