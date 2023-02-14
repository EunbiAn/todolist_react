import React, { useState, useEffect } from "react";

function RadioMenu({setRadioValue, fristValue, secondValue}) {
  return (

    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        checked=""
        onClick={(e)=>{setRadioValue(false);}}
      />
      <label class="btn btn-outline-primary" for="btnradio1">
        {fristValue}
      </label>
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
        checked=""
        onClick={(e)=>{setRadioValue(true);}}
      />
      <label class="btn btn-outline-primary" for="btnradio2">
       {secondValue}
      </label>
    </div>
  );
}

export default RadioMenu;
