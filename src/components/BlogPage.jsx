import { BLOGS } from "../constants/blogs";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const BlogPage = () => {
  const { id } = useParams();
  const blog = BLOGS.find(blog => blog.id === parseInt(id));
  const [showSources, setShowSources] = useState(false);

  if (!blog) {
    return <div className="text-center py-10">Blog not found</div>;
  }

  // Split content into paragraphs and process subheadings
  const paragraphs = blog.content.split('\n\n').map((paragraph, index) => {
    // Check if paragraph starts with a subheading pattern (e.g., "### Subheading")
    if (paragraph.trim().startsWith('### ')) {
      return (
        <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 text-blue-300">
          {paragraph.trim().replace('### ', '')}
        </h2>
      );
    }
    return <p key={index} className="mb-4 text-neutral-300">{paragraph.trim()}</p>;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-300 hover:text-blue-400 mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex justify-between text-neutral-400 mb-6">
            <p>{blog.date}</p>
            <p>{blog.readTime}</p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded bg-neutral-900 px-2 py-1 text-sm font-semibold text-blue-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            {paragraphs}
          </div>

          {blog.sources && blog.sources.length > 0 && (
            <div className="mt-12 border-t border-neutral-800 pt-6">
              <button
                onClick={() => setShowSources(!showSources)}
                className="flex items-center text-neutral-400 hover:text-neutral-300 transition-colors duration-300"
              >
                <span className="mr-2">Sources</span>
                <motion.div
                  animate={{ rotate: showSources ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {showSources && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-2 text-sm text-neutral-400">
                      {blog.sources.map((source, index) => (
                        <p key={index}>{source}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage; 