import React, { Component } from 'react';
import Slider from 'react-slick';



export default class Portfolio extends Component {

  render() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    draggable: true,
    swipe: true,
  };
    return (
      <section id="portfolio" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="skew top"></div>


              <h2>PORTFOLIO</h2>
              <Slider {...settings}>
                {this.props.projects.map((project, i) => {
                  return (
                    <div key={i} className="slideContainer">
                      <div>
                        <div className="imageBox">
                          <img className={project.imageStyle} src={project.image} alt=""/>
                        </div>
                        <div className="information">
                          <h4 className="name">{project.name}</h4>
                          <h4 className="languages">{
                            project.languages.map((language) => {
                              return language;
                            })
                          }</h4>
                          <h5 dangerouslySetInnerHTML={{__html: project.description}} />
                        </div>
                        <div className="projectLink">
                          <a href={project.link} target="_blank" className="btn btn-lg btn-block primaryButton">To Project</a>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </Slider>

        <div className="skew bottom"></div>

       </section>
    );
  }
}
