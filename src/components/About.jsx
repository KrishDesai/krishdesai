import aboutImg from "../assets/about2.png"
import { BsArrowDownCircleFill } from "react-icons/bs";
import { motion } from "framer-motion"; 


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
        <motion.div
        initial={{y:-30, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.5, delay: 1.5}}
        >
        <h2 className="my-1 mx-2 px-5 text-left text-3xl font-semibold"> <span style={{ color: '#d0f3fd'}}> Krish Desai.</span> </h2>
        <h2 className="my-1 mx-2 px-5 text-left text-1xl font-semibold" style={{ color: 'white'}}>Computer & Info Science + AI @ <a href="https://www.cornell.edu/" target="_blank"> <span style={{ color: '#ff6860' }} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1"> Cornell </span> </a>  </h2>
        <h3 className="my-2 mx-2 px-5 text-left text-1xl italic" style={{ color: 'white'}}> {"you will never know if something is meant for you if you don't give it a proper chance."}</h3>
        </motion.div>

        <div className="flex flex-wrap">
            <div className=" lg:w-1/2 lg:p-6 px-5">
                <div className="flex items-center justify-center"> 
                    <motion.img 
                    initial={{y:-70, opacity: 0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration: 0.5, delay: 2}}
                    className="rounded-2xl" src={aboutImg} width={750} height={650} alt="about" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p 
                        initial={{y:-60, opacity: 0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration: 0.5, delay: 2}}
                        className="my-2 py-5 px-5"> I am a student studying computer & information science with a minor in artificial intelligence at Cornell University. My interests are in machine learning, particularly in natural language processing, large language models (LLMs) and AI/ML ethics. <br/><br/> My long term goal is to create products and conduct research that improves the quality of human life. I aspire to work on projects that have a tangible, positive impact on society, whether through improving healthcare, education, or other essential sectors. <br/><br/> Outside of work, I enjoy playing soccer, cricket, cooking, learning about world history and spending time with my family.</motion.p>
                    </div>
            </div>
        </div>
        <motion.div 
        initial={{y:-50, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.5, delay: 2.5}}
        className="flex items-center justify-center text-2xl my-10">
            <BsArrowDownCircleFill />
        </motion.div>
        
    </div>

  )
}

export default About