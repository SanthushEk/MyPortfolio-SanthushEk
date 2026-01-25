import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, image, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 
                   flex items-center justify-center p-4 md:p-6" // Reduced padding for small screens
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Close modal when clicking backdrop
      >
        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          className="bg-gray-900 max-w-4xl w-full max-h-[90vh] rounded-2xl 
                     border-2 border-[#33cdcc] overflow-hidden flex flex-col" // Added max-height and flex-col
        >
          {/* Scrollable Container */}
          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {/* Image */}
            <img
              src={image}
              alt={project.title}
              className="w-full h-48 md:h-64 object-cover" // Responsive image height
            />

            {/* Content */}
            <div className="p-5 md:p-8">
              <h2 className="font-bold text-xl md:text-2xl text-white">
                {project.title}
              </h2>

              <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
                {project.longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] md:text-xs px-2.5 py-1 rounded-full 
                               bg-[#33cdcc]/10 text-[#33cdcc] border border-[#33cdcc]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 pb-2">
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-center bg-[#33cdcc] text-black font-medium py-2 px-6 rounded-lg hover:bg-white transition-colors sm:bg-transparent sm:text-[#33cdcc] sm:p-0 sm:hover:underline"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-center border border-[#33cdcc] text-[#33cdcc] py-2 px-6 rounded-lg hover:bg-[#33cdcc]/10 transition-colors sm:border-none sm:p-0 sm:hover:underline"
                >
                  Source Code
                </a>

                <button
                  onClick={onClose}
                  className="mt-4 sm:mt-0 sm:ml-auto text-gray-400 hover:text-white py-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;