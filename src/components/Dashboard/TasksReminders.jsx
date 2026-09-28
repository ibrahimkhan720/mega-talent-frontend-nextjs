"use client";

const tasks = [
  ["Review 10 new applications","Today","High","high",true],
  ["Schedule interviews with shortlisted candidates","Today","Medium","medium",false],
  ["Update job descriptions","Tomorrow","Medium","medium",false],
  ["Send offer letters to selected candidates","Sep 28","Low","low",false],
  ["Prepare monthly recruitment report","Sep 30","Low","low",false],
];

export default function TasksReminders() {
  return (
    <section className="dashboard-card">
      <div className="card-header compact"><div><h3>Tasks & Reminders</h3><p>Your pending tasks</p></div><button className="view-button">View All</button></div>
      <div className="tasks-list">
        {tasks.map(([title,due,priority,tone,checked]) => (
          <div className="task-row" key={title}>
            <span className={`task-check ${checked ? "checked" : ""}`}>{checked ? "✓" : ""}</span>
            <div className="task-copy"><strong>{title}</strong></div>
            <span className={`priority ${tone}`}>{priority}</span><small>{due}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
