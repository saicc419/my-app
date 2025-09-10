import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const names = ["Sai", "Supraja", "Ravi", "Anitha", "Deepak"];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "8px",
          width: "200px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "12px",
        }}
      />

      <ul>
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => <li key={index}>{name}</li>)
        ) : (
          <li>No match found</li>
        )}
      </ul>
    </div>
  );
}

export default Search;
