import React from "react";

export default function TabButton({ text, onClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onClick}>
        {text}
      </button>
    </li>
  );
}
