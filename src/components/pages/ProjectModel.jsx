import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, image, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 
                   flex items-center justify-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 40 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 max-w-4xl w-full rounded-2xl 
                     border-2 border-[#33cdcc] overflow-hidden"
        >
          {/* Image */}
          <img
            src={image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />

          {/* Content */}
          <div className="p-8">
            <h2 className="font-semibold text-sm md:text-xl text-white">
              {project.title}
            </h2>

            <p className="text-gray-300 mt-4 text-sm md:text-base">
              {project.longDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full 
                             bg-[#33cdcc]/10 text-[#33cdcc]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-6 mt-8">
              <a
                href={project.demo}
                target="_blank"
                className="text-[#33cdcc] hover:underline"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                className="text-[#33cdcc] hover:underline"
              >
                Source Code
              </a>

              <button
                onClick={onClose}
                className="ml-auto text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
