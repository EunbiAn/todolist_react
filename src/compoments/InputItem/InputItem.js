import React, { useState, useEffect } from "react";
import './InputItem.css';
function InputItem({ addWork }) {
  const [newWork, setNewWork] = useState("");
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="할 일을 입력하세요"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={newWork}
        onChange={(e) => {
          setNewWork(e.target.value);
        }}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={(e) => {
          addWork(newWork);
          setNewWork("");
        }}
      >
        추가
      </button>
    </div>
  );
}
export default InputItem;
