// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./calender.css"; // Import the CSS file
// import { FaPlus } from "react-icons/fa"; // Importing Font Awesome Plus icon

// export default function CalendarGfg() {
//   const [value, onChange] = useState(new Date());
//   const [notes, setNotes] = useState({});
//   const [currentNote, setCurrentNote] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const isToday = (date) => {
//     const today = new Date();
//     return (
//       date.getDate() === today.getDate() &&
//       date.getMonth() === today.getMonth() &&
//       date.getFullYear() === today.getFullYear()
//     );
//   };

//   const addNote = (date, note) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     setNotes({
//       ...notes,
//       [formattedDate]: note,
//     });
//   };

//   const getNote = (date) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     return notes[formattedDate] || "";
//   };

//   const handleDateChange = (date) => {
//     onChange(date);
//     setCurrentNote(getNote(date));
//   };

//   const tileContent = ({ date }) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     const note = notes[formattedDate];
//     return note ? <div className="note">{note}</div> : null;
//   };

//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     const note = notes[formattedDate];
//     if (isToday(date)) {
//       return "today";
//     } else if (note) {
//       return "note-date";
//     }
//     return null;
//   };

//   const handleNoteChange = (e) => {
//     setCurrentNote(e.target.value);
//   };

//   const saveNote = () => {
//     addNote(value, currentNote);
//     setIsModalOpen(false);
//   };

//   const resetNote = () => {
//     const formattedDate = value.toISOString().split("T")[0];
//     setNotes({
//       ...notes,
//       [formattedDate]: "",
//     });
//     setCurrentNote("");
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="calendar-container">
//       <Calendar
//         onChange={handleDateChange}
//         value={value}
//         tileContent={tileContent}
//         tileClassName={tileClassName}
//       />
//       <button className="fab" onClick={toggleModal}>
//         <FaPlus />
//       </button>
//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close-button" onClick={toggleModal}>
//               &times;
//             </span>
//             <h3>Notes for Selected Date:</h3>
//             <textarea
//               value={currentNote}
//               onChange={handleNoteChange}
//               placeholder="Add notes here..."
//               rows={4}
//               cols={50}
//             />
//             <div className="button-container">
//               <button className="save-button" onClick={saveNote}>
//                 Save Note
//               </button>
//               <button className="reset-button" onClick={resetNote}>
//                 Reset Note
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
