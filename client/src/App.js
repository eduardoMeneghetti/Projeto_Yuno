import './assets/style/root.css'
import './assets/style/layout.css'
import './assets/style/style.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="root">
        <nav class="cabecalho">
            <h1>\Yuno\</h1>
            <img src={require("./assets/style/icons/login.png")} alt="HTML tutorial"/>
        </nav>
    </header>
    <main>
        <form>
            <textarea placeholder="O que está pensando hoje?..."></textarea>
            <button class="botao" type="submit"><strong>Enviar</strong></button>
        </form>
        
        <div class="comentarios">

        </div>
    </main>
    <footer>

    </footer>
    </div>
  );
}

export default App;
