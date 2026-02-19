import { GraduationCap, Leaf, Code } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label="Sobre" title="Quem sou eu" />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <AboutCard
            icon={<Leaf className="h-5 w-5 text-primary" />}
            title="Biologo"
            description="Licenciatura em Biologia pela UFMA com pos-graduacao em Ecologia. Experiencia como professor em escolas estaduais do Maranhao."
          />
          <AboutCard
            icon={<Code className="h-5 w-5 text-primary" />}
            title="Desenvolvedor"
            description="Conhecimento em HTML5, CSS3, JavaScript, Git e GitHub. Estudante dedicado de programacao, criando projetos web reais."
          />
          <AboutCard
            icon={<GraduationCap className="h-5 w-5 text-primary" />}
            title="Aprendiz Constante"
            description="Formacao em IA, automacao com inteligencia artificial, engenharia de prompt e Python para IA. Sempre evoluindo."
          />
        </div>

        <div className="mt-12 bg-card rounded-xl border border-border p-8">
          <p className="text-muted-foreground leading-relaxed text-base">
            {"Sou um profissional com perfil multidisciplinar, unindo a formacao cientifica em Biologia e Ecologia com a paixao por tecnologia e desenvolvimento web. Com mais de 5 anos de experiencia em atendimento ao publico e vendas, desenvolvi habilidades solidas de comunicacao, negociacao e resolucao de problemas. Atualmente, estou em transicao para a area de tecnologia, aplicando minha capacidade analitica e meu compromisso com a qualidade na criacao de solucoes digitais."}
          </p>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-primary" />
        <span className="text-sm font-mono text-primary tracking-wider uppercase">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  )
}

function AboutCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors group">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
