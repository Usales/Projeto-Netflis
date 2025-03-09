import './Lobby.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Trainee from '../_images/imagem1.jpg';
import Junior from '../_images/imagem2.jpg';
import Pleno from '../_images/imagem3.jpg';
import Senior from '../_images/imagem4.jpg';
import Fullstack from '../_images/imagem5.jpg';

function Lobby() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
        navigate('/tela-inicial', { state: { selectedImage: image } });
    };

    return (
        <div>
            <h1 className="profile-gate-label">Quem está assistindo?</h1>
            <main className="container">
                <div className="btn" onClick={() => handleClick(Trainee)}>
                    <img src={Trainee} alt="Botão 1" />
                    <p className="profile-gate-label">Trainee</p>
                </div>
                <div className="btn" onClick={() => handleClick(Junior)}>
                    <img src={Junior} alt="Botão 2" />
                    <p className="profile-gate-label">Junior</p>
                </div>
                <div className="btn" onClick={() => handleClick(Pleno)}>
                    <img src={Pleno} alt="Botão 3" />
                    <p className="profile-gate-label">Pleno</p>
                </div>
                <div className="btn" onClick={() => handleClick(Senior)}>
                    <img src={Senior} alt="Botão 4" />
                    <p className="profile-gate-label">Senior</p>
                </div>
                <div className="btn" onClick={() => handleClick(Fullstack)}>
                    <img src={Fullstack} alt="Botão 5" />
                    <p className="profile-gate-label">Fullstack</p>
                </div>
            </main>
        </div>
    );
}

export default Lobby;