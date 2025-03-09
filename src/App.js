import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lobby from './Lobby';
import TelaInicial from './Cabecalho';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Lobby />} />
                <Route path="/tela-inicial" element={<TelaInicial />} />
            </Routes>
        </Router>
    );
}

export default App;
