import { EXPERIENCES } from "../constants"
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion"; 


const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.div 
        initial={{y:-50, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.5, delay: 4}}
        className="flex my-5 items-center justify-center text-2xl ">
            <MdWork />
            <h1 className="my-5 mx-2 text-center text-3xl font-semibold"> Work </h1>
        </motion.div>
        <motion.div
        initial={{y:-100, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.5, delay: 4.5}}> 
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 px-5 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </div>
                    <div className = "w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                             <span> {experience.role} - {" "} </span>
                             <span className="whitespace-nowrap text-sm text-blue-300 mb-2 font-semibold rounded bg-neutral-900 px-2 py-1"> 
                                <a href={experience.link} target="_blank"> {experience.company} </a>
                             </span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                         <span key = {index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-2 
                         text-sm font-semibold text-blue-500"
                         >{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default Experience