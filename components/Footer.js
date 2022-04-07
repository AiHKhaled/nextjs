import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <footer>
      <h3>Copyright elijah {year.getFullYear()}</h3>
    </footer>
  );
};

export default Footer;
