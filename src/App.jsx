import "./App.css";
import { useState, useEffect } from "react";

import Notes from "./Components/Notes/Notes";
import Nav from "./components/Nav/Nav";

function App() {
  const items = JSON.parse(localStorage.getItem("notes") || "[]");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();

  const [notes, setNotes] = useState(items);

  const handleRemove = (id, index) => {
    setNotes((notes) => {
      return notes.filter((note) => note.id !== id);
    });
  };

  // && note.id === id ? { ...note, isVisible: false } : note

  const handleCreate = (color) => {
    setNotes([
      {
        id: Date.now(),
        color: color,
        isVisible: true,
        content: "",
        date:
          date.getDate() +
          " " +
          days[date.getDay()] +
          ", " +
          date.getFullYear(),

        time: date.toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      ...notes,
    ]);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const handleAddContent = (e, index) => {
    notes[index].content = e.target.value;
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="app">
      <Nav handleCreate={handleCreate} />
      <Notes
        notes={notes}
        setNotes={setNotes}
        handleRemove={handleRemove}
        handleAddContent={handleAddContent}
      />
    </div>
  );
}

export default App;
