import React from "react";
import { SearchIcon } from "./Icons.jsx";

export function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon-inside">
        <SearchIcon size={18} />
      </span>
      <input
        type="text"
        className="search-input-box"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search"
      />
      {value && (
        <button
          className="search-clear-btn"
          onClick={() => onChange("")}
          title="Clear search"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
