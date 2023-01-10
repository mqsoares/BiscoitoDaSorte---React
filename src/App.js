import imgBiscuit from './assets/biscuit.svg'
// import imgBrokenBiscuit from './assets/brokenBiscuit.svg'
import Button from './components/Button';

function App() {
  return (
    <div className='container'>
      <h1>Biscoito da Sorte</h1>
    
      <p>Ao abrir um biscoito da sorte nos deparamos com uma sábia mensagem de motivação. As mensagens originam-se de estudos da sabedoria chinesa sobre o autoconhecimento.</p> 

      <img src={imgBiscuit} alt="Imagem do biscoito da sorte"/>
      
      <Button />
    </div>
  );
}

export default App;
