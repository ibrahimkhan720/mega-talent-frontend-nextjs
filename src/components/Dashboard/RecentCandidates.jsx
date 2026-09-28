"use client";

import { Eye, MessageSquare, MoreHorizontal } from "lucide-react";

const candidates = [
  ["AR","Ali Raza","ali.raza@example.com","Frontend Developer","Sep 25, 2026","New","new"],
  ["SA","Sara Ahmed","sara.ahmed@example.com","UI/UX Designer","Sep 24, 2026","Screening","screening"],
  ["HK","Hamza Khan","hamza.khan@example.com","Backend Developer","Sep 22, 2026","Interview","interview"],
  ["AM","Ayesha Malik","ayesha.malik@example.com","Product Manager","Sep 21, 2026","Shortlisted","shortlisted"],
];

export default function RecentCandidates() {
  return (
    <section className="dashboard-card candidates-card">
      <div className="card-header">
        <div><h3>Recent Candidates</h3><p>Latest candidates added to Mega Talent</p></div>
        <button className="view-button">View All</button>
      </div>

      <div className="table-wrap">
        <table className="candidates-table">
          <thead><tr><th>Candidate</th><th>Email</th><th>Position</th><th>Applied Date</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {candidates.map(([initials,name,email,position,date,status,tone]) => (
              <tr key={email}>
                <td><div className="candidate-cell"><div className="candidate-photo">{initials}</div><strong>{name}</strong></div></td>
                <td>{email}</td><td>{position}</td><td>{date}</td>
                <td><span className={`status ${tone}`}>{status}</span></td>
                <td><div className="row-actions"><button><Eye size={14}/></button><button><MessageSquare size={14}/></button><button><MoreHorizontal size={15}/></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
