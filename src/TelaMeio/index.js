import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TelaMeio.css';

const netflix = [
  { url: 'https://media.fstatic.com/4zSPkyBV7ATUgnaqRSownG27ifc=/322x478/smart/filters:format(webp)/media/movies/covers/2025/02/cats_tutJoEz.png', link: 'https://redecanais.ps/um-amor-de-cinema-dublado-lista-de-episodios_59031f392.html' },
  { url: 'https://i.pinimg.com/474x/2d/2e/93/2d2e93f15fcb73bfce39fb4bc4ed0ab5.jpg', link:'https://redecanais.ps/cobra-kai-dublado-legendado-lista-de-episodios_cdc107513.html' },
  { url: 'https://br.web.img3.acsta.net/img/86/73/867374c3bf108cc516fc9be50c30a11c.jpg', link: 'https://redecanais.ps/wallace-gromit-avenganca-dublado-2025-1080p_9fe703a08.html' },
  { url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg', link: 'https://redecanais.ps/round-6-dublado-lista-de-episodios_003b4b311.html' },
  { url: 'https://www.un.uniaodosherois.com.br/images/assuntos/797-ranma-12-1-tb.jpg', link: 'https://redecanais.ps/ranma12-dublado-lista-de-episodios_583e9a356.html' },
  { url: 'https://upload.wikimedia.org/wikipedia/pt/d/d6/Senna-S%C3%A9rie-2024-Ayrton-Senna-Banner.jpg', link: 'https://redecanais.ps/senna-nacional-lista-de-episodios_191811974.html' }
  // Adicione mais URLs de imagens e links conforme necessário
];

const disney = [
  { url: 'https://m.media-amazon.com/images/I/81TR9+czWiS._AC_UF1000,1000_QL80_.jpg', link: 'https://redecanais.ps/e-se-what-if-dublado-lista-de-episodios_e34114a6d.html' },
  { url: 'https://m.media-amazon.com/images/I/71Mm18L8edL._AC_UF1000,1000_QL80_.jpg', link: 'https://redecanais.ps/agatha-desde-sempre-dublado-lista-de-episodios_a528452af.html' },
  { url: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/04/19/1325831308-poster.jpg', link: 'https://redecanais.ps/divertida-mente-2-legendado-2024-1080p_59e14d0a9.html' },
  { url: 'https://m.media-amazon.com/images/I/71BhaSy47lL._AC_UF1000,1000_QL80_.jpg', link: 'https://redecanais.ps/sand-land-a-serie-dublado-lista-de-episodios_057544deb.html' },
  { url: 'https://cinepop.com.br/wp-content/uploads/2016/07/meuamigoodragao_4.jpg', link: 'https://redecanais.ps/meu-amigo-o-dragao-dublado-2016-1080p_a572aa6a8.html' },
  { url: 'https://m.media-amazon.com/images/I/71g3Er7PSPL._AC_UF894,1000_QL80_.jpg', link: 'https://redecanais.ps/percy-jackson-e-os-olimpianos-dublado-lista-de-episodios_c0253e9c1.html' }
  // Adicione mais URLs de imagens e links conforme necessário
];

const prime = [
  { url: 'https://i0.wp.com/bandasdesenhadas.com/wp-content/uploads/2021/03/invincible.jpg?resize=640%2C948&ssl=1', link: 'https://redecanais.ps/invencivel-dublado-lista-de-episodios_92e1ddc87.html' },
  { url: 'https://br.web.img3.acsta.net/c_310_420/img/bb/42/bb424d7252ee1269e897999c6b1b51f1.jfif', link: 'https://redecanais.ps/nivel-secreto-dublado-lista-de-episodios_6628d1f37.html' },
  { url: 'https://cinepop.com.br/wp-content/uploads/2024/08/a-lenda-de-vox-machina-1.jpg', link: 'https://br.web.img3.acsta.net/pictures/22/01/12/21/10/1080692.png' },
  { url: 'https://conectageek.com.br/wp-content/uploads/2024/06/batman-cruzado-encapuzado-poster.jpg', link: 'https://redecanais.ps/batman-cruzado-encapuzado-dublado-lista-de-episodios_5e9a6dbbd.html' },
  { url: 'https://sm.ign.com/t/ign_br/screenshot/default/butcher-clean-rgb_8snc.600.jpg', link: 'https://redecanais.ps/the-boys-dublado-lista-de-episodios_8d5866c62.html' },
  { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggAzEC-UKQA6ylXNkIQIF9pv4olsVvuZKsdzEUePLLmCenBOtyD215lJiI9WyXEmHJdeexH94mJUrv4vUmGZHetYJKxbK7X3xaT6amfz9pblL8XLr3wApyYmyWBPBZKcEJTjpxx95NeAMq9m-xQ1iuSvBpxH9Z4WgCK4GdT_2ygmsZeo4yn2XAwk2mjYcj/s1350/406924850_654179383551934_4789132405847271748_n.jpg', link: 'https://redecanais.ps/fallout-dublado-lista-de-episodios_f1b3f9a5f.html' }
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
      <h1 className='h1'>Netflix</h1>
      <Slider {...settings}>
        {netflix.map((image, index) => (
          <div key={index} className="carousel-slide">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.url} alt={`Slide ${index}`} />
            </a>
          </div>
        ))}
      </Slider>

      <h1 className='h1'>Disney</h1>
      <Slider {...settings}>
        {disney.map((image, index) => (
          <div key={index} className="carousel-slide">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.url} alt={`Slide ${index}`} />
            </a>
          </div>
        ))}
      </Slider>

      <h1 className='h1'>Prime Vídeo</h1>
      <Slider {...settings}>
        {prime.map((image, index) => (
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