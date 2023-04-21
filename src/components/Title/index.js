import React, { useState, useRef, useEffect } from "react";
// import StoreApi from "../../utils/storeApi";
import { ConnectingAirportsOutlined, MoreVert } from "@mui/icons-material";
import "./styles.scss";

const Title = ({ title, listId }) => {
  const refOptions = useRef(null);
  const refBtnToggleOptions = useRef(null);

  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  useEffect(() => {
    if (!openOptions || !refOptions.current) return;
    // 노드 생성 후에
    document.addEventListener(
      "mousedown",
      (e) => {
        console.log("fire");
        // 현재 활성화된 옵션, 옵션 토글 버튼이 아닌 것을 클릭했을 때 옵션 숨김
        if (!refOptions.current.contains(e.target) && !refBtnToggleOptions.current.contains(e.target)) {
          setOpenOptions(false);
        }
      },
      { once: true }
    );
  }, [openOptions]);

  const handleOnBlur = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {open ? (
        <div>
          <input
            type="text"
            className="input-title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOnBlur();
              }
              return;
            }}
            onBlur={handleOnBlur}
            autoFocus
          />
        </div>
      ) : (
        <div className="editable-title-container">
          <h2 onClick={() => setOpen((prev) => !prev)}>{title}</h2>
          <button className="list-button" ref={refBtnToggleOptions} onClick={() => setOpenOptions((prev) => !prev)}>
            <MoreVert />
          </button>
          {openOptions && (
            <div className="btn_more" ref={refOptions}>
              <ul className="menu-card">
                <li
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    // deleteList(listId);
                  }}
                >
                  Delete list
                </li>
                <li
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    // setOpen(!open);
                  }}
                >
                  Edit card title
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Title;
