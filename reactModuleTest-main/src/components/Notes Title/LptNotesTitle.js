import React from 'react'
import './LptNotesTitle.css';
import UseContext from '../../useContext'

function LptNotesTitle({ title }) {
    const { selected, setSelected } = UseContext();
    const nameInitals = (() => {
      const words = title[0].name.split(" ");
      let initial = "";
    
      if (words.length === 1) {
        initial = words[0].slice(0, 2).toUpperCase();
      } else if (words.length === 2) {
        initial = words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
      } else if (words.length > 2) {
        initial = words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
      }
    
      return initial;
    })();
  
    const newTitle = title[0].name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  
    const handleTitleOnClick = () => {
      setSelected(title[0].name);
    };
  
    return (
      <div
        onClick={handleTitleOnClick}
        className={`group_title_logo ${
          selected === title[0].name ? "highlighted_title" : null
        }`}
      >
        <div className="title_logo" style={{ backgroundColor: title[0].color }}>
          {nameInitals}
        </div>
        <div className="group_title">{newTitle}</div>
      </div>
    );
  }
  
  export default LptNotesTitle;