export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {"2026 Pablo Rahonne. Todos os direitos reservados."}
        </p>
        <p className="text-xs text-muted-foreground">
          {"Feito com Next.js & Tailwind CSS"}
        </p>
      </div>
    </footer>
  )
}
