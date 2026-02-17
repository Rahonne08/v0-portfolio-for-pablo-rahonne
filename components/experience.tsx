const experiences = [
  {
    role: "Agente Comercial",
    company: "Ceneged",
    location: "Codo, MA",
    period: "2021 - Presente",
    description:
      "Atendimento ao cliente com eficiencia e qualidade. Analise de perfil de clientes, negociacao de contratos e condicoes comerciais. Utilizacao de sistemas CRM e SAP para controle de vendas.",
    tags: ["Vendas", "CRM", "SAP", "Negociacao"],
  },
  {
    role: "Professor Auxiliar",
    company: "Escola Jose Sarney",
    location: "Timbiras, MA",
    period: "2019 - 2020",
    description:
      "Acompanhamento de alunos em atividades pedagogicas. Ministracao de aulas na ausencia de professores, orientacao de alunos em projetos praticos e controle de frequencia e avaliacao de desempenho.",
    tags: ["Educacao", "Biologia", "Gestao de Sala"],
  },
  {
    role: "Professor Substituto",
    company: "Secretaria de Educacao do Estado",
    location: "Coroata, MA",
    period: "2019",
    description:
      "Planejamento de aulas e atividades em conformidade com a proposta pedagogica. Elaboracao e correcao de provas e trabalhos para avaliar o aprendizado dos alunos.",
    tags: ["Ensino", "Planejamento", "Biologia"],
  },
]

const education = [
  {
    degree: "Pos-Graduacao em Ecologia",
    institution: "Faculdade Metropolitana",
    period: "2023",
  },
  {
    degree: "Licenciatura em Biologia",
    institution: "Universidade Federal do Maranhao (UFMA)",
    period: "2013 - 2018",
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Experiencia
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Trajetoria Profissional
          </h2>
        </div>

        {/* Timeline */}
        <div className="mt-12 relative">
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp) => (
              <div key={`${exp.role}-${exp.period}`} className="relative pl-8 md:pl-12">
                <div className="absolute left-0 md:left-4 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />
                <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-mono text-primary">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {exp.company} — {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-primary" />
            Formacao Academica
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <span className="text-xs font-mono text-primary">{edu.period}</span>
                <h4 className="font-semibold text-foreground mt-2">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-primary" />
            Certificados em Destaque
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML e CSS",
              "JavaScript",
              "Git e GitHub",
              "Inteligencia Artificial: do zero ao avancado",
              "Automacao com IA",
              "Python para IA",
              "Engenharia de Prompt",
              "Venda Consultiva",
            ].map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm border border-border"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
