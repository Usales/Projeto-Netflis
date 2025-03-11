import './Cabecalho.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../_images/netflix.png';
import Lupa from '../_images/lupa.png';
import Sino from '../_images/Sino.png';
import videoSrc from '../_images/videoplayback.mp4';
import LogoSerie from '../_images/invecivel.png';
import TelaMeio from '../TelaMeio';
import Rodape from '../Rodape';

function TelaInicial() {
    const location = useLocation();
    const selectedImage = location.state?.selectedImage || '../_images/imagem1.jpg';

    return (
        <div className="tela-inicial">
            <video autoPlay muted loop className="background-video">
                <source src={videoSrc} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            <header className="header">
                <img src={logo} alt="Netflix Logo" className="logo" />
                <nav className="nav">
                    <ul>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#series">Séries</a></li>
                        <li><a href="#filmes">Filmes</a></li>
                        <li><a href="#bombando">Bombando</a></li>
                        <li><a href="#minha-lista">Minha Lista</a></li>
                    </ul>
                </nav>
                <div className="extra-nav">
                    <img src={Lupa} alt="Lupa" className="Lupa" />
                    <ul>
                        <li><a href="#infantil">Infantil</a></li>
                    </ul>
                    <img src={Sino} alt="Sino" className="Sino" />
                    <img src={selectedImage} alt="Conta" className="Conta" />
                </div>
            </header>
            <div className="content">
                <div className="image-container">
                    <img src={LogoSerie} alt="LogoSerie" className="LogoSerie" />
                    <div className="buttons">
                        <button className="btn-watch">▶ Assistir</button>
                        <button className="btn-info">ⓛ Mais Informações</button>
                    </div>
                </div>
            </div>
            <TelaMeio />
            <Rodape />
        </div>
    );
}

export default TelaInicial;