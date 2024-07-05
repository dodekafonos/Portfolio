import './App.css';
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import Hero from './components/Hero';
import card1Image from './assets/siat_preview.jpg';
import card2Image from './assets/site-universidade-preview.png';
import card3Image from './assets/bios-preview.png';

function App() {
  return (
    <div className="bg-base h-screen">

      <Header />

      <Hero />

      <div className="flex flex-wrap justify-center gap-4 px-4">

        <Card
          image={card1Image}
          name="SIATT Connect"
          description="A platform for scheduling meetings and rooms without the headache."
          url="https://github.com/m-u-l-a-s/API-SIATT/tree/main"
        />
        <Card
          image={card2Image}
          name="Unes University"
          description="A mock website for a fictional school."
          url="https://github.com/m-u-l-a-s/API-SIATT/tree/main"
        />
        <Card
          image={card3Image}
          name="BIOS"
          description="A vida é boa demais."
          url="https://github.com/m-u-l-a-s/API-SIATT/tree/main"
        />

      </div>

    </div>

  );
}

export default App;
