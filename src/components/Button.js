import React from "react";

function Button({ label, onClick }) {
    return (
        <div>
      <button  className="text-center;"
        onClick={onClick} 
        style={{ 
          backgroundColor: "#000", 
          color: "#fff", 
          padding: "10px 16px", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer" ,
          margin:"10px",
        }}
      >
        {label}
      </button></div>
    );
  
  }
export default Button;