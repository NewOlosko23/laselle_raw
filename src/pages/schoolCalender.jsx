import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const SchoolCalendar = () => {
  const events = [
    {
      title: "Term 1 Begins",
      start: new Date(2025, 0, 6),
      end: new Date(2025, 0, 6),
    },
    {
      title: "Midterm Break",
      start: new Date(2025, 1, 15),
      end: new Date(2025, 1, 17),
    },
    {
      title: "Term 1 Ends",
      start: new Date(2025, 3, 6),
      end: new Date(2025, 3, 6),
    },
    {
      title: "Term 2 Opens",
      start: new Date(2025, 4, 5),
      end: new Date(2025, 4, 5),
    },
    {
      title: "Parents Meeting",
      start: new Date(2025, 4, 12, 10, 30),
      end: new Date(2025, 4, 12, 13, 0),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        📅 School Calendar
      </h2>
      <div style={{ height: "500px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day", "agenda"]}
          defaultView="month"
          popup
          style={{ height: "100%", borderRadius: "12px" }}
        />
      </div>
    </div>
  );
};

export default SchoolCalendar;
