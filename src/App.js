import { useRef } from 'react';
import './App.css';
import ParticlesComponent from './components/particles';
import Apresentacao from './components/Apresentacao';
import Curriculo from './components/Curriculo';
import Projetos from './components/Projetos';

function App() {
  const curriculoRef = useRef(null);

  const scrollToCurriculo = () => {
    curriculoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <div>
        <Apresentacao scrollToNext={scrollToCurriculo} />
        <div ref={curriculoRef}>
          <Curriculo />
        </div>
        <Projetos/>
      </div>
    </div>
  );
}

export default App;
