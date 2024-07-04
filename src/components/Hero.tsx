
import profileImage from '../assets/perfil_jonas_opt_quadrado.png';

function Hero() {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={profileImage}
            className="max-w-sm shadow-2xl rounded-full"
            alt="Profile"
          />
          <div>
            <h1 className="text-5xl font-bold">Hello World 🚩</h1>
            <p className="py-6 text-justify">
            I'm a 27 years old coffee-powered bug crafter, currently studying System Analysis and Development at Fatec.

🔭 Currently working on a Project Management SPA for my undergratuate course using React and ElephantDB.
🌱 Currently learning about Typescript, algorithms and Data Structures.
            </p>
            <button className="btn btn-primary">Contact me</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  
