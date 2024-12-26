import { useEffect, useRef } from 'react';
import { PROJECTS } from "../constants"; 
import { FaLaptopCode } from "react-icons/fa6";
import { motion } from "framer-motion"; 
import './Projects.css'; // Import the CSS file

const Projects = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 1;
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(scroll, 20);
        return () => clearInterval(interval);
    }, []);

    return (
      <div className="border-b border-neutral-900 pb-4">
        <motion.div 
        initial={{y:-50, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.5, delay: 3}}
        className="flex my-5 items-center justify-center text-2xl ">
        <FaLaptopCode/>
        <h1 className='my-5 mx-2 text-center text-3xl font-semibold'>Projects</h1>
        </motion.div>
        <motion.div 
        initial={{y:-100, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.5, delay: 3.5}}
        ref={scrollRef}
        className="projects-scroll-container flex overflow-x-auto space-x-4 py-4 px-2">
          {[...PROJECTS, ...PROJECTS].map((project, index) => (
            <div key={index} className="flex-none w-[550px] mx-4 my-3 px-5"> {/* Increased width */}
              <img
                src={project.image}
                width={500} /* Updated width */
                height={500} /* Updated height */
                alt={project.title}
                className="mb-6 rounded-2xl"
              />
              <div className="px-1">
                <h6 className="mb-2 text-base font-semibold rounded bg-neutral-900 inline-block px-2 py-2 text-blue-300">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

export default Projects;
