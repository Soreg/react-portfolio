import React from 'react';

const Footer = () => {
  return (
    <section id="footer" className="footer text-center">
      <div className="container-fluid">
           <div className="row">
               <div className="col-md-8 col-md-offset-2">
                   <h6><span>&copy; Soren Gravesen, All Rights Reserved - {
                     (new Date()).getFullYear()
                   }</span></h6>
               </div>
           </div>
      </div>
    </section>
  );
}

export default Footer;
