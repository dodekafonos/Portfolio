
import profileImage from '../assets/perfil_jonas_opt_quadrado.png';

function Hero() {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={profileImage}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Profile"
          />
          <div>
            <h1 className="text-5xl font-bold">Hello World 🚩 </h1>
            <p className="py-6">
              I'm Jonas Alves, an all-round developer based in São José dos Campos, Brazil.
            </p>
            <button className="btn btn-primary">Contact me</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  
