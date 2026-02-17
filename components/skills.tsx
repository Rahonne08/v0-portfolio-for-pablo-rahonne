export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Habilidades
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Tecnologias & Competencias
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <SkillGroup
            title="Desenvolvimento Web"
            skills={[
              { name: "HTML5", level: 85 },
              { name: "CSS3", level: 80 },
              { name: "JavaScript", level: 70 },
              { name: "Git & GitHub", level: 70 },
            ]}
          />
          <SkillGroup
            title="Inteligencia Artificial"
            skills={[
              { name: "Engenharia de Prompt", level: 80 },
              { name: "Automacao com IA", level: 75 },
              { name: "Python para IA", level: 60 },
            ]}
          />
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">Outras Competencias</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Comunicacao",
              "Negociacao",
              "Atendimento ao Cliente",
              "CRM / SAP",
              "Microsoft Office",
              "Gestao do Tempo",
              "Trabalho em Equipe",
              "Oratoria",
              "Ensino",
              "Ingles Intermediario (B2)",
              "Venda Consultiva",
              "Adaptabilidade",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm border border-border hover:border-primary/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillGroup({
  title,
  skills,
}: {
  title: string
  skills: { name: string; level: number }[]
}) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="font-semibold text-foreground mb-6">{title}</h3>
      <div className="flex flex-col gap-5">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">{skill.name}</span>
              <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
