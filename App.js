import './global.css';
import Paragraph from './components/StyledText/index';
import Button from './components/AlertButton/index';

function App() {
  return (
    <div className='conteudo'>
      <h3>REACT BASE | QUEST | DEV QUEST</h3>
      <Paragraph
        corFundo="#86C552"
        corTexto="#000"
        texto="Matias Ezequiel Correa, estudante de Engenharia da Computação. 🚀"
      />

      <Paragraph
        corFundo="#012A5A"
        corTexto="red"
        texto="Matias Ezequiel Correa, um desenvolvedor Frontend em formação. 👨‍💻"
      />

      <Paragraph />
      <div className='botoes'>
      <Button label="Ver CV" />
      <Button label="Baixar CV" />
      <Button label="Compartilhar CV" />
      </div>
    </div >
  );
}

export default App;
