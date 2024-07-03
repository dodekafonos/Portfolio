import './App.css';
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import Hero from './components/Hero';
import cardImage from './assets/commie_tux.png';

function App() {
  return (
    <div className="bg-base h-screen">

      <Header />

      <Hero />

      <div className="flex flex-wrap justify-center gap-4 px-4">

        <Card
          image={cardImage}
          name="API Fatec"
          description="Descrição da API."
          url="https://github.com/m-u-l-a-s/API-SIATT/tree/main"
        />
        <Card
          image={cardImage}
          name="Oi mo"
          description="Descrição do outro projeto."
          url="https://github.com/m-u-l-a-s/API-SIATT/tree/main"
        />
        <Card
          image={cardImage}
          name="Aiaiai"
          description="A vida é boa demais."
          url="https://github.com/m-u-l-a-s/API-SIATT/tree/main"
        />

      </div>

    </div>

  );
}

export default App;
