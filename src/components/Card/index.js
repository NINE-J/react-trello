import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import TextareaAutosize from "react-textarea-autosize";
import { DeleteOutline } from "@mui/icons-material";
import "./styles.scss";

const Card = ({ card, listId, index }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);

  const handleOnBlur = (cardId) => {
    // updateCardTitle
    setOpen((prev) => !prev);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
          <div className="card-content">
            {open ? (
              <TextareaAutosize
                type="text"
                className="input-card-title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleOnBlur(card.id);
                  }
                  return;
                }}
                onBlur={handleOnBlur}
                autoFocus
              />
            ) : (
              <div onClick={() => setOpen((prev) => !prev)} className="card-title-container">
                <p>{card.title}</p>
                <button>
                  <DeleteOutline />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
