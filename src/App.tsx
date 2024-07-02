
import './App.css'
import './index.css'
import Header from "./components/Header";
import Card from './components/Card';
// import Diff from './components/Diff';
import Hero from './components/Hero';

function App() {

  return (
    <>


    <div className="bg-base h-screen">

      <Header></Header>

      {/* <Diff></Diff> */}

      <Hero></Hero>

      <div className="flex">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>

    </div>


    </>
  )
}

export default App
