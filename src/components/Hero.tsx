
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
            I'm a 28 years old coffee-powered bug crafter, almost done with my undergrad studies in System Analysis and Development at 
            
            <strong>
            <a href="https://fatecsjc-prd.azurewebsites.net/" target="_blank"> Fatec. </a>
            </strong>
            
            I'm also a development internet at 
            <strong>
            <a href="https://opt.com.br/" target="_blank"> OPT.</a>
            </strong>
            
            
            <p className='mt-4'>
            🔭 Currently working on a mobile application for my undergratuate course using React Native and on some GIS scripts;
            <br />
            🌱 Currently learning about React Native, Geoprocessing and Infrastructure.
            </p>

            </p>
            <button className="btn btn-primary">Reach out!</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  
