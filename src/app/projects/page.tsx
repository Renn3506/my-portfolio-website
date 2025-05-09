import { ProjectCard } from '@/components/project-card';

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto space-y-10 px-4 md:px-0 animate-fade-in-scroll">
      <h2 className="text-4xl font-playfair font-bold text-purple-400 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Portfolio Website"
          description="This responsive site using Next.js + Tailwind CSS."
          link="https://github.com/Renn3506/portfolio"
        />
      </div>
    </section>
  );
}
