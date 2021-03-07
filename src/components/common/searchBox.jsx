import React from "react";

export default function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      name="query"
      id="search"
      placeholder="Search..."
      className="form-control my-3"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}
