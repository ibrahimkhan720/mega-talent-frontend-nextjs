"use client";

import { Bell, Plus, Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="search-box">
        <Search size={17} />
        <input placeholder="Search candidates, vacancies..." />
        <kbd>Ctrl K</kbd>
      </div>

      <div className="header-right">
        <button className="header-add">
          <Plus size={16} />
          <span>Add New</span>
          <ChevronDown size={14} />
        </button>

        <button className="notification-button">
          <Bell size={18} />
          <i />
        </button>

        <div className="header-user">
          <div className="header-avatar">FK</div>
          <div className="header-user-info">
            <strong>Fahim Khan</strong>
            <span>Super Admin</span>
          </div>
          <ChevronDown size={15} />
        </div>
      </div>
    </header>
  );
}
