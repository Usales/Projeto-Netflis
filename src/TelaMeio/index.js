import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TelaMeio.css';

const images = [
  { url: 'https://i.pinimg.com/736x/94/b7/b6/94b7b6cbcbce6ac43b792e78bdef7021.jpg', link: 'https://www.youtube.com/watch?v=W9trWFMISCo' },
  { url: 'https://i.pinimg.com/736x/94/70/ca/9470ca0b9be88ce2f848f4c8db6ee3a5.jpg', link: 'https://www.youtube.com/watch?v=W9trWFMISCo' },
  { url: 'https://i.pinimg.com/736x/cd/dd/eb/cdddebf8c3224bc212543878b74634cf.jpg', link: 'https://www.youtube.com/watch?v=W9trWFMISCo' },
  { url: 'https://i.pinimg.com/736x/0a/64/18/0a64188bba46179880408877e6a1bdcb.jpg', link: 'https://www.youtube.com/watch?v=W9trWFMISCo' },
  { url: 'https://i.pinimg.com/736x/a7/d3/d5/a7d3d5e5b2c6af5a04e13b6b1eba2d3d.jpg', link: 'https://www.youtube.com/watch?v=W9trWFMISCo' },
  { url: 'https://i.pinimg.com/736x/c7/dd/dd/c7dddded60f381e026384ce7a47f22e2.jpg', link: 'https://www.youtube.com/watch?v=W9trWFMISCo' }
  // Adicione mais URLs de imagens e links conforme necessário
];

const TelaMeio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h1 className='h1'>Animes</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.url} alt={`Slide ${index}`} />
            </a>
          </div>
        ))}
      </Slider>
      <h1 className='h1'>Animes</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.url} alt={`Slide ${index}`} />
            </a>
          </div>
        ))}
      </Slider>
      <h1 className='h1'>Animes</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.url} alt={`Slide ${index}`} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TelaMeio;