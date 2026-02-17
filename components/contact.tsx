import { Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Contato
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Vamos conversar?
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&to=pablorahonne.pr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">E-mail</h3>
              <p className="text-muted-foreground text-sm mt-0.5">pablorahonne.pr@gmail.com</p>
            </div>
          </a>

          <div className="bg-card rounded-xl border border-border p-6 flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Localizacao</h3>
              <p className="text-muted-foreground text-sm mt-0.5">Timbiras, Maranhao - Brasil</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-card rounded-xl border border-border p-8 text-center">
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
            {"Estou aberto a novas oportunidades e projetos. Se voce tem uma ideia interessante ou precisa de um profissional dedicado, ficarei feliz em conversar!"}
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=pablorahonne.pr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity mt-6"
          >
            <Mail className="h-4 w-4" />
            Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  )
}
