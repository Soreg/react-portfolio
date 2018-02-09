import React from 'react';

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <h6><span>&copy; Soren Gravesen, All Rights Reserved - {
        (new Date()).getFullYear()
      }</span></h6>
    </section>
  );
}

export default Footer;
