import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [palyerName, setPlayerName] = useState(name);

  function editPlayerName() {
    setIsEditing(!isEditing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let playerNameField = <span className="player-name">{palyerName}</span>;
  let buttonName = "Edit";
  if (isEditing) {
    playerNameField = (
      <input type="text" value={palyerName} onChange={handleChange} required />
    );
    buttonName = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editPlayerName}>{buttonName}</button>
    </li>
  );
}
