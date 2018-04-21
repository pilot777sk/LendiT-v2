import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Carousel, Image, Grid, Row } from 'react-bootstrap';
import './Home.css';


class Home extends Component {
  render () {
    return(
      <div className="container">
        

        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
            <div className='row'>
          
          <div className='col-md-12'>
            <div className="carousel slide">
              <Carousel>
                <Carousel.Item className="carousel-item">
                  <div className="view"></div>
                  {/* Logo Slide */}
                  <Carousel.Item>
                    <Image className="carousel-item" src="assets/Lendit_logo.png" alt="Logo slide" />
                  </Carousel.Item>
                  {/* First Slide */}
                  <Image className="carousel-item" src="assets/bike.jpg" alt="First slide" />
                </Carousel.Item>
                {/* Second Slide */}
                <Carousel.Item>
                  <Image className="carousel-item" src="assets/chainsaw.jpg" alt="Second slide" />
                </Carousel.Item>
                {/* Third Slide */}
                <Carousel.Item>
                  <Image className="carousel-item" src="assets/chairs.jpg" alt="Third slide" />
                </Carousel.Item>
                {/* Fourth Slide */}
                <Carousel.Item>
                  <Image className="carousel-item" src="assets/kayak.jpg" alt="Forth slide" />
                </Carousel.Item> 
                {/* Fifth Slide */}
                <Carousel.Item>
                  <Image className="carousel-item" src="assets/keg.jpg" alt="Fifth slide" />
                </Carousel.Item> 
                {/* Sixth Slide */}
                <Carousel.Item>
                  <Image className="carousel-item" src="assets/ladder.jpg" alt="Sixth slide" />
                </Carousel.Item>
                {/* Seventh Slide */}
                <Carousel.Item>
                  <Image className="carousel-item" src="assets/mower.jpg" alt="Seventh slide" />
                </Carousel.Item>
                {/* Eighth Slide */}
                <Carousel.Item>
                  <Image className="carousel-item" src="assets/sewing.jpg" alt="Eighth slide" />
                </Carousel.Item>
                {/* Nineth Slide */}
                <Carousel.Item>
                  <Image className="carousel-item" src="assets/trailer.jpg" alt="Nineth slide" />
                </Carousel.Item>
                {/* Tenth Slide */}
                <Carousel.Item>
                  <Image className="carousel-item" src="assets/wheelbarrow.jpg" alt="Tenth slide" />
                </Carousel.Item>
              </Carousel>
            </div>

          </div>
          
        </div>
              <h1 className="display-4">Welcome to LendiT</h1>
              <p className="lead">LendiT is a great website for those who are looking for the right piece of equipment.</p>
              <hr className="my-4" />
              <p>Whether you’re a Do it yourselfer or a Weekend warrior find what your looking for on Lendit.</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
              </p>
            </div>
          </div>  
        </div>
      </div>
    )
  }
}
export default Home;
