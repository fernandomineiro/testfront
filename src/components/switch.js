import React, { useRef } from "react";

function Switch({ mode, setMode, checked, setChecked }) {
  const inputRef = useRef("");
  function handleOnChange() {
    setChecked(inputRef.current.checked);
    setMode(inputRef.current.checked);
  }

  return (
    <div className="header-dark-mode">
      <p className="dark-mode-title">Modo Escuro</p>
      <div className="swith-dark-mode">
        <label htmlFor="checkbox" className="switch">
          <input
            type="checkbox"
            name=""
            id="checkbox"
            ref={inputRef}
            onChange={handleOnChange}
            checked={checked}
          />
          <span className={`slider ${mode}`}></span>
        </label>
      </div>
    </div>
  );
}

export default Switch;
