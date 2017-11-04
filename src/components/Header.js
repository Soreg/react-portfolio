import React from 'react';

import Logo from './../img/Logo.png';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href=""><img src={Logo} alt="Logo" className="img-responsive" /></a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
          <div className="col-xs-3">
            <li className="socialLink"><a href="https://github.com/Soreg" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
          </div>
            <div className="col-xs-3">
              <li className="socialLink"><a href="http://www.codepen.io/TudiKovin/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a></li>
            </div>
            <div className="col-xs-3">
              <li className="socialLink"><a href="https://www.twitter.com/SorenWebDev" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
            </div>
            <div className="col-xs-3">
              <li className="socialLink"><a href="http://www.linkedin.com/in/soreg" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
            </div>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Header;
