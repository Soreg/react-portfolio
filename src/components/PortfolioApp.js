import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Presentation from './Presentation';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

export default class PortfolioApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Visual Weather',
          languages: ['HTML /', ' CSS /', ' Javascript /', ' jQuery /', ' API /', ' JSON'],
          description: 'Visual Weather is an on-going personal project. It displays the local weather to a set of 4 animated "weather cards", based on the city you are searching for.',
          link: 'https://visual-weather.surge.sh/',
          image: 'http://sgcoding.media/img/slider/Visual.png',
          imageStyle: 'design1'
        },
        {
          name: 'React Bulletin Board',
          languages: ['React /', ' JSX /', ' CSS /', ' JSON'],
          description: 'The Bulletin Board is my first and only completed project using React. The app allowed you to create / delete notes, aswell as edit them. The notes are placed randomly on the board, and are draggable.',
          link: 'https://codepen.io/TudiKovin/full/XgJPaa/',
          image: 'http://sgcoding.media/img/slider/BulletinBoard.png',
          imageStyle: 'design2'
        },
        {
          name: 'Outdoor Haderslev',
          languages: ['HTML /', ' CSS /', ' PHP'],
          description: 'Outdoor Haderslev is a danish site, and was an assignment given to me at a local bootcamp. Outdoor Haderslev uses a free Wordpress theme, which has been customized with Html and Css.',
          link: 'http://www.sgcoding.media/outdoor-haderslev/',
          image: 'http://sgcoding.media/img/slider/OutdoorHaderslev.png',
          imageStyle: 'design4'
        },
        {
          name: 'Famous Quotes',
          languages: ['React /', ' CSS /', ' Javascript /', ' jQuery /', ' API /', ' JSON'],
          description: 'Famous Quotes is a small project made in collaboration with <a href="https://www.linkedin.com/in/alison-bearden-060938145/" target="_blank"><span className="text-shoutout">Alison</span></a>. It uses JSON to fetch a random quote from their library, split up in "Movie" and "Famous" categories.',
          link: 'http://famousquotes.surge.sh/',
          image: 'http://sgcoding.media/img/slider/FamousQuotes.png',
          imageStyle: 'design1'
        },
        {
          name: 'DevMOP Chrome Extension',
          languages: ['Html /', ' CSS /', ' Javascript /', ' jQuery /', ' Api /', ' JSON'],
          description: 'DevMOP is a Chrome Extension aimed towards developers. The main goal is to keep developers focused and motivated by giving them a set of tools.<br /> DevMop was made in collaboration with <a href="https://github.com/fatizhf" target="_blank"><span className="text-shoutout">Fatima</span></a> and <a href="https://github.com/mussol" target="_blank"><span classname="text-shoutout">Mussol</span></a>',
          link: 'https://chrome.google.com/webstore/detail/devmop/nbnbhmpifhipmfckccbhelhmbkccejbc',
          image: 'http://sgcoding.media/img/slider/devMopScreen.png',
          imageStyle: 'design3'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Presentation />
        <Skills />
        <Portfolio projects={this.state.projects}/>
        <Contact />
        <Footer />
      </div>
    );
  }
}
