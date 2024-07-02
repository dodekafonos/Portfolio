import ThemeToggle from "./ThemeToggle";
import LangToggle from './LangToggle';

import { FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import "../index.css"

function Header() {

  return (
    <>

        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <LangToggle></LangToggle>
        {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="src\assets\perfil_jonas_opt_quadrado.png" />
        </div>
      </div> */}
        </div>
        <div className="navbar-center">
            <div className="tooltip" data-tip="Github">
                <a  className="btn btn-ghost text-xl"><FaGithub /></a>
            </div>
            <div className="tooltip" data-tip="LinkedIn">
            <a className="btn btn-ghost text-xl"><FaLinkedin /></a>
            </div>
            <div className="tooltip" data-tip="Curriculum">
            <a className="btn btn-ghost text-xl"><IoIosDocument /></a>
            </div>
        </div>
        <div className="navbar-end">

            <ThemeToggle></ThemeToggle>

        </div>
        </div>

    </>
  )
}

export default Header;
