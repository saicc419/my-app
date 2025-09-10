import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p className="mb-0">© {new Date().getFullYear()} Gridlex. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
