"use client";

const vacancies = [
  ["Frontend Developer","Engineering",48,"Active","purple"],
  ["UI/UX Designer","Design",32,"Active","pink"],
  ["Backend Developer","Engineering",41,"Draft","orange"],
  ["Product Manager","Product",27,"Active","green"],
];

export default function RecentVacancies() {
  return (
    <section className="dashboard-card">
      <div className="card-header compact"><div><h3>Recent Vacancies</h3><p>Latest job openings</p></div><button className="view-button">View All</button></div>
      <div className="vacancies-list">
        {vacancies.map(([title,department,applications,status,tone]) => (
          <div className="vacancy-row" key={title}>
            <div className={`vacancy-icon ${tone}`}>✦</div>
            <div className="vacancy-info"><strong>{title}</strong><span>{department}</span></div>
            <div className="vacancy-applications"><strong>{applications}</strong><span>Applications</span></div>
            <span className={`vacancy-status ${status.toLowerCase()}`}>{status}</span>
            <button className="dots">•••</button>
          </div>
        ))}
      </div>
    </section>
  );
}
