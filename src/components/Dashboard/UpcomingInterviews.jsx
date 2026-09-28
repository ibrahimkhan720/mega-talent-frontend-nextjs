"use client";

const interviews = [
  ["26","SEP","Ali Raza","Frontend Developer","10:00 AM","Technical Round","AR"],
  ["27","SEP","Sara Ahmed","UI/UX Designer","11:30 AM","HR Interview","SA"],
  ["28","SEP","Usman Tariq","Backend Developer","02:00 PM","Technical Round","UT"],
  ["29","SEP","Fatima Noor","Product Manager","04:00 PM","Final Interview","FN"],
];

export default function UpcomingInterviews() {
  return (
    <section className="dashboard-card">
      <div className="card-header compact"><div><h3>Upcoming Interviews</h3><p>Scheduled interviews this week</p></div><button className="view-button">View All</button></div>
      <div className="interviews-list">
        {interviews.map(([day,month,name,role,time,type,initials]) => (
          <div className="interview-row" key={name}>
            <div className="calendar-badge"><strong>{day}</strong><span>{month}</span></div>
            <div className="mini-avatar">{initials}</div>
            <div className="interview-person"><strong>{name}</strong><span>{role}</span></div>
            <div className="interview-time"><strong>{time}</strong><span>{type}</span></div>
            <button className="dots">•••</button>
          </div>
        ))}
      </div>
    </section>
  );
}
