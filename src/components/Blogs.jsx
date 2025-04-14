import { BLOGS } from "../constants/blogs";
import { FaBlog } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.div 
        initial={{y:-50, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.5, delay: 4.5}}
        className="flex my-5 items-center justify-center text-2xl">
        <FaBlog />
        <h1 className="my-5 mx-2 text-center text-3xl font-semibold">Blogs</h1>
      </motion.div>
      <motion.div
        initial={{y:-100, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.5, delay: 5}}>
        {BLOGS.map((blog) => (
          <Link 
            key={blog.id} 
            to={`/blog/${blog.id}`}
            className="block mb-8 px-5 flex flex-wrap lg:justify-center hover:bg-neutral-900/50 transition-colors duration-300 rounded-lg py-4"
          >
            <div className="w-full max-w-xl">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-neutral-400">{blog.date}</p>
                <p className="text-sm text-neutral-400">{blog.readTime}</p>
              </div>
              <h6 className="mb-2 text-xl font-semibold hover:text-blue-300 transition-colors duration-300">{blog.title}</h6>
              <p className="mb-4 text-neutral-400">{blog.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-semibold text-blue-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs; 