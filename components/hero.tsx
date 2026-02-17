import { ArrowDown, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-5xl w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
            Pablo Rahonne
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            {"Biologo & Desenvolvedor Web."}
            <br />
            {"Conectando a ciencia da vida com a arte do codigo."}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              Entre em contato
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
            >
              Saiba mais
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-border relative">
            <Image
              src="/images/avatar.jpg"
              alt="Pablo Rahonne"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-64 h-64 rounded-2xl border border-primary/30 -z-10" />
        </div>
      </div>
    </section>
  )
}
