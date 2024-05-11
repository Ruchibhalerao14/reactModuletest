import React from "react";
import "./Laptop.css";
import Sidebar from "../../src/components/Sidebar/Sidebar";
import LMain from "../../src/components/Home/LMain";
import LNotes from "../../src/components/Notes/LNotes";
import UseContext from "../useContext";

function Laptop() {
  const { selected } = UseContext();

  return (
    <div className="laptop">
      <Sidebar />
      {selected.length > 0 ? <LNotes /> : <LMain />}
    </div>
  );
}

export default Laptop;
