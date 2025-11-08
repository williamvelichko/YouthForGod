import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Schedule.scss";

const scheduleDays = [
  {
    day: "Friday",
    date: "May 29, 2026",
    sessions: [
      { time: "8:00 AM", title: "Check-In & Coffee Lab", type: "Community" },
      { time: "9:00 AM", title: "Morning Worship & Welcome", type: "Worship" },
      { time: "10:15 AM", title: "Keynote: Christ Alone", type: "Teaching" },
      { time: "12:00 PM", title: "Lunch + Ministry Huddles", type: "Break" },
      { time: "1:30 PM", title: "Breakout Labs (4 Tracks)", type: "Labs" },
      { time: "3:00 PM", title: "Student Panel + Live Q&A", type: "Conversation" },
      { time: "5:30 PM", title: "Dinner on the Lawn", type: "Community" },
      { time: "7:00 PM", title: "Evening Revival Session", type: "Worship" },
    ],
  },
  {
    day: "Saturday",
    date: "May 30, 2026",
    sessions: [
      { time: "7:00 AM", title: "Sunrise Devotion & Prayer Walk", type: "Prayer" },
      { time: "8:30 AM", title: "Breakfast & Team Debriefs", type: "Break" },
      { time: "9:30 AM", title: "Keynote: Faith Alone", type: "Teaching" },
      { time: "11:00 AM", title: "Workshops: Culture & Discipleship", type: "Labs" },
      { time: "12:30 PM", title: "Lunch + Coaching Appointments", type: "Break" },
      { time: "2:00 PM", title: "Testing Schedule (Production Run)", type: "Operations" },
      { time: "4:00 PM", title: "Commissioning Service", type: "Worship" },
      { time: "6:00 PM", title: "Send-Off & Team Photos", type: "Community" },
    ],
  },
];

export function SchedulePage() {
  return (
    <>
      <Header />
      <main className="schedule">
        <section className="schedule__hero">
          <p className="schedule__eyebrow">May 29 – 30 · Sacramento</p>
          <h1>Schedule & Flow</h1>
          <p className="schedule__lead">
            Every block is crafted to move students from inspiration to activation—anchored in
            Scripture, honest Q&A, and hands-on labs.
          </p>
        </section>

        <section className="schedule__days">
          {scheduleDays.map((day) => (
            <article key={day.day} className="schedule__day-card">
              <header>
                <p>{day.date}</p>
                <h3>{day.day}</h3>
              </header>
              <ul>
                {day.sessions.map((session) => (
                  <li key={`${day.day}-${session.time}`}>
                    <div>
                      <span className="schedule__session-time">{session.time}</span>
                      <span className="schedule__session-title">{session.title}</span>
                    </div>
                    <span className={`schedule__tag schedule__tag--${session.type.toLowerCase()}`}>
                      {session.type}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
