import React from "react";

export default function DropListField() {
  return (
    <div className="form-floating">
      <select
        className="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
      >
        <option selected>Open this select menu</option>
      </select>
      <label for="floatingSelect">Works with selects</label>
    </div>
  );
}
