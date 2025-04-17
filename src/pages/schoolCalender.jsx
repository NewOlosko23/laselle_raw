import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const localizer = momentLocalizer(moment);

const SchoolCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "schoolEvents"));
        const fetchedEvents = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            title: data.title,
            start: new Date(data.start),
            end: new Date(data.end),
          };
        });
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        📅 School Calendar
      </h2>
      <div style={{ height: "600px", width: "100%" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day", "agenda"]}
          defaultView="month"
          selectable
          style={{ height: "100%", borderRadius: "12px" }}
        />
      </div>
    </div>
  );
};

export default SchoolCalendar;
