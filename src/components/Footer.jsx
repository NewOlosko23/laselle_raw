import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className="border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        &copy; {year} La Salle School Homa Bay. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
