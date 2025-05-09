type ProjectProps = {
  title: string;
  description: string;
  link?: string;
};

export function ProjectCard({ title, description, link }: ProjectProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-playfair font-semibold text-cyan-400 mb-2">{title}</h2>
      <p className="text-sm text-gray-300 font-lato mb-3">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-cyan-300 hover:underline transition-opacity duration-200"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

  