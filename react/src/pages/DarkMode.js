import React from "react";

const DarkMode = (props) => {
  return (
    <>
      <button
        className="darkModeToggle"
        onClick={() => props.darkMode(!props.dark)}
      >
        Dark Mode
      </button>
    </>
  );
};

export default DarkMode;
