import React from "react";
import "./LNotesCon.css";

function LNotesCon({ note }) {
  
  return (
    <div className="notes_content_note">
      
      <div className="notes_content_details">
        {note.content}
      </div>
      <div className="notes_content_date_time_details">
        <div className="notes_content_time">{note.time}</div>
        <div className="notes_content_date">{note.date}</div>
      </div>
    </div>
  );
}

export default LNotesCon;
