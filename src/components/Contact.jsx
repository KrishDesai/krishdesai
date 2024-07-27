import {CONTACT} from "../constants"
import { GiAndroidMask } from "react-icons/gi";
import { motion } from "framer-motion"; 

const Contact = () => {
  return (
   <motion.div 
   initial={{y:-100, opacity: 0}}
   animate={{y:0, opacity:1}}
   transition={{duration: 0.5, delay: 5}}
   className="border-b border-neutral-900 pb-5">
    {/*
    <div className="flex my-5 items-center justify-center text-2xl ">
    <GiAndroidMask />
    <h2 className="my-5 mx-2 text-center text-3xl font-semibold"> Currently... </h2>
  </div> */}
        <div className="text-center tracking-tighter text-base py-10">
            <a href="https://maps.app.goo.gl/rFAP2yPPEBH7RJDW6" target="_blank"> <p className="my-4"> Ithaca, NY, USA </p> </a>
            <a href={CONTACT.email}> <p> {CONTACT.email} </p> </a>
        </div>
   </motion.div>
  )
}

export default Contact