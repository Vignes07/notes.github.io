import "./Notes.css";
import { Trash } from "react-bootstrap-icons";
import { useState } from "react";

function Notes({ notes, handleRemove, handleAddContent }) {
  const [isElementVisible, setElementVisible] = useState(true);
  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <h1 className="header">Notes</h1>
        {notes.length !== 0 ? (
          <div className="notes">
            {notes.map((notes, i) => {
              return (
                <div
                  className="notesContainer"
                  key={notes.id}
                  style={{ background: `${notes.color}` }}
                >
                  <div className="top">
                    <textarea
                      autoFocus={notes.content.length === 0 ? true : false}
                      name="notes"
                      className="notesArea"
                      placeholder="Type your notes here!"
                      rows={8}
                      cols={29}
                      defaultValue={notes.content}
                      onChange={(e) => handleAddContent(e, i)}
                    />
                  </div>
                  <div className="bottom">
                    <span className="date">
                      {notes.date}&nbsp;-&nbsp;{notes.time}
                    </span>
                    <Trash
                      className="button"
                      type="button"
                      onClick={() => handleRemove(notes.id, i)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No Notes Found</div>
        )}
      </div>
    </div>
  );
}

export default Notes;
