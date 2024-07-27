import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";



const Navbar = () => {
  return <nav className="mb-0 flex items-center justify-between py-6">
    <div className = "flex flex-shrink-0 items-center"> 
    </div>
    <div className = "m-2 flex items-center justify-center gap-4 text-2xl ">
        <a href="https://www.linkedin.com/in/desaikrish/" target="_blank"> <FaLinkedin/> </a>
        <a href="https://github.com/KrishDesai" target="_blank"> <FaGithub/> </a>
        <a href="" target="_blank"> <IoDocumentText/> </a>
    </div>
  </nav> 
};

export default Navbar