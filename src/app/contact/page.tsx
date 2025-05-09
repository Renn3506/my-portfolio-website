import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto text-center px-4 md:px-0 animate-fade-in-scroll">
      <h1 className="text-4xl font-playfair font-bold text-teal-300 mb-4">Contact Me</h1>
      <p className="text-gray-300 font-lato mb-6">
        I'm open to collaboration, feedback, or questions. Reach out any time.
      </p>

      <div className="flex flex-col items-center space-y-4">
        <a
          href="mailto:drihanfernando@gmail.com"
          className="flex items-center space-x-2 text-cyan-400 hover:underline hover:text-cyan-300 transition"
        >
          <EnvelopeIcon className="w-5 h-5" />
          <span className="font-lato">drihanfernando@gmail.com</span>
        </a>

        <a
          href="https://github.com/Renn3506"
          target="_blank"
          className="flex items-center space-x-2 text-cyan-400 hover:underline hover:text-cyan-300 transition"
        >
          <FaGithub className="w-5 h-5" />
          <span className="font-lato">@Renn3506</span>
        </a>

        <a
          href="https://linkedin.com/in/drihan-fernando-ab0732332/"
          target="_blank"
          className="flex items-center space-x-2 text-cyan-400 hover:underline hover:text-cyan-300 transition"
        >
          <FaLinkedin className="w-5 h-5" />
          <span className="font-lato">LinkedIn Profile</span>
        </a>
      </div>
    </section>
  );
}
