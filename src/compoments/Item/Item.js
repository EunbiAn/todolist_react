import React, { useState, useEffect } from "react";
import "./Item.css";
function Item({ item, removeWork, updateItem }) {
  const [mode, setMode] = useState(false);
  const [title, setTitle] = useState(item.title);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check form-switch">
        
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          checked={item.done ? "checked" : ""}
          onChange={(e) => {
            item.done = e.target.checked;
            updateItem(item);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className={item.done ? "deleteLine" : "labelInput"}
          value={title}
          disabled={mode ? "" : "disabled"}
        />
        <div className="btnDiv">
        
          {/* 완료된 항목이라면 수정 불가 */}
          {item.done ? (
            ""
          ) : (
            <button
              className="btn btn-outline-success"
              onClick={(e) => {
                setMode(!mode);
                if (mode) {
                  item.title = title;
                  updateItem(item);
                }
              }}
            >
              {mode ? "수정완료" : "수정"}
            </button>
          )}
           <button
            className="btn btn-outline-success"
            onClick={(e) => {
              removeWork(item.no);
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </li>
  );
}
export default Item;
