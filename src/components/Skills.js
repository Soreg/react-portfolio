import React from 'react';

import Html5Logo from './../img/Skills/htm5Logo.png';
import Css3Logo from './../img/Skills/css3Logo.png';
import JavascriptLogo from './../img/Skills/javascriptLogo.png';
import JqueryLogo from './../img/Skills/jqueryLogo.png';
import CSharpLogo from './../img/Skills/cSharpLogo.png';
import PhpLogo from './../img/Skills/phpLogo.png';
import SqlLogo from './../img/Skills/sqlLogo.png';
import ReactLogo from './../img/Skills/reactLogo.png';
import SassLogo from './../img/Skills/sassLogo.png'


export default class Skills extends React.Component {
  render() {
    return (
      <section id="skills">
             <div>
               <div>
                 <h2>PROGRAMMING LANGUAGES</h2>
               </div>
               <div className="images">
                 <div>
                   <img src={Html5Logo} alt=""></img>
                 </div>
                 <div>
                   <img src={Css3Logo} alt=""></img>
                 </div>
                 <div>
                   <img src={JavascriptLogo} alt=""></img>
                 </div>
                 <div>
                   <img src={JqueryLogo} alt=""></img>
                 </div>
                 <div>
                   <img src={PhpLogo} alt=""></img>
                 </div>
                 <div>
                   <img src={SqlLogo} alt=""></img>
                 </div>
                 <div>
                   <img src={ReactLogo} alt=""></img>
                 </div>
                 <div>
                   <img src={SassLogo} alt=""></img>
                 </div>
               </div>
             </div>

        </section>
    );
  }
}
