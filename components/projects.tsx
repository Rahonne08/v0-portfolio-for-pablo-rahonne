import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Timbiras Kids Stories",
    description:
      "Plataforma interativa de historias infantis para criancas da cidade de Timbiras-MA. Projeto que une educacao e tecnologia para incentivar a leitura.",
    url: "https://timbiras-kids-stories.lovable.app",
    tags: ["Web App", "Educacao", "HTML/CSS/JS"],
  },
  {
    title: "Maycon Rafael - Portfolio",
    description:
      "Portfolio profissional desenvolvido para o cliente Maycon Rafael. Design moderno e responsivo com foco na apresentacao pessoal e profissional.",
    url: "https://maycon-rafael.lovable.app",
    tags: ["Portfolio", "Web Design", "Freelance"],
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Projetos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Trabalhos Selecionados
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
