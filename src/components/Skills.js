import React from 'react';

import Html5Logo from './../img/Skills/htm5Logo.png';
import Css3Logo from './../img/Skills/css3Logo.png';
import JavascriptLogo from './../img/Skills/javascriptLogo.png';
import JqueryLogo from './../img/Skills/jqueryLogo.png';
import CSharpLogo from './../img/Skills/cSharpLogo.png';
import PhpLogo from './../img/Skills/phpLogo.png';
import SqlLogo from './../img/Skills/sqlLogo.png';
import ReactLogo from './../img/Skills/reactLogo.png';


export default class Skills extends React.Component {
  render() {
    return (
      <section id="skills" className="text-center">
        <div className="container">
             <div className="row">
               <div className="col-md-12">
                 <h2>PROGRAMMING LANGUAGES</h2>
               </div>
               <div className="col-md-12 images">
                 <div className="col-md-3 col-xs-6">
                   <img src={Html5Logo} alt=""></img>
                 </div>
                 <div className="col-md-3 col-xs-6">
                   <img src={Css3Logo} alt=""></img>
                 </div>
                 <div className="col-md-3 col-xs-6">
                   <img src={JavascriptLogo} alt=""></img>
                 </div>
                 <div className="col-md-3 col-xs-6">
                   <img src={JqueryLogo} alt=""></img>
                 </div>
                 <div className="col-md-3 col-xs-6">
                   <img src={CSharpLogo} alt=""></img>
                 </div>
                 <div className="col-md-3 col-xs-6">
                   <img src={PhpLogo} alt=""></img>
                 </div>
                 <div className="col-md-3 col-xs-6">
                   <img src={SqlLogo} alt=""></img>
                 </div>
                 <div className="col-md-3 col-xs-6">
                   <img src={ReactLogo} alt=""></img>
                 </div>
               </div>
             </div>
          </div>

        </section>
    );
  }
}
