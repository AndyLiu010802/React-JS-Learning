import React from "react";

export default function TabButton({ text, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{text}</button>
    </li>
  );
}
