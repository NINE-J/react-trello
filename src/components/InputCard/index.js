import React, { useState } from "react";
import { Clear } from "@mui/icons-material";
import "./styles.scss";

const InputCard = ({ setOpen, listId, type }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="input-card">
      <div className="input-card-container">
        <textarea
          className="input-text"
          placeholder={type === "card" ? "Enter a title of this card..." : "Enter list title"}
          autoFocus
        />
      </div>
      <div className="confirm">
        <button className="button-confirm">{type === "card" ? "Add Card" : "Add List"}</button>
        <button className="button-cancel">
          <Clear />
        </button>
      </div>
    </div>
  );
};

export default InputCard;
