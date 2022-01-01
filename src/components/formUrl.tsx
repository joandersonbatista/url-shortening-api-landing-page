import React from "react";

import "./formUrl.css";

export default function FormUrl() {
  return (
    <form action="" className="form-content">
      <input type="text" placeholder="Shorten a link here..." />
      <button type="button">Shorten It!</button>
    </form>
  );
}
