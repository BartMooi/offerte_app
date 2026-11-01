import Link from "next/link";

const producten = [
  { name: "Kozijnen", href: "/kozijnen", foto: "/producten/kozijnen.jpg" },
  { name: "Deuren", href: "/deuren", foto: "/producten/deuren.jpg" },
  { name: "Schuifpui", href: "/schuifpui", foto: "/producten/schuifpui.jpg" },
  { name: "Harmonicadeur", href: "/harmonicadeur", foto: "/producten/harmonicadeur.jpg" },
  { name: "Rolluiken", href: "/rolluiken", foto: "/producten/rolluiken.jpg" },
  { name: "Horren", href: "/horren", foto: "/producten/horren.jpg" },
];

const stappen = ["Kies product", "Stel samen", "Offerte in uw mail"];

export default function StartPagina() {
  return (
    // Schermhoogte min navbar, zodat alles zonder scrollen in beeld past
    <div className={`bg-brand-dark h-[calc(100svh-5rem)] md:h-[calc(100svh-6rem)]`}>
      {/* Zelfde breedte en marges als de Navbar, zodat alles onder het logo uitlijnt */}
      <div className="h-full flex flex-col px-4 md:px-6 pt-6 pb-4 md:py-10 max-w-[1400px] mx-auto w-full">
        <div className="mb-6 md:mb-10 shrink-0 text-center">
          <p className="text-[#1FB3E7] text-[0.813rem] font-bold uppercase tracking-[1.6px] mb-3">Online offerte</p>
          <h1 className="text-white leading-[1.2]">
            <span className="text-2xl md:text-4xl font-bold tracking-[-0.8px]">Hallo 👋</span>
            <span className="ml-3 md:ml-4 text-base md:text-lg text-white/80 font-normal">stel in 3 minuten uw offerte samen.</span>
          </h1>

          <ol className="mt-6 md:mt-8 flex items-center justify-center gap-2 md:gap-3">
            {stappen.map((s, i) => (
              <li key={s} className="flex items-center gap-2 md:gap-3 min-w-0">
                <span className="flex items-center gap-1.5 md:gap-2 min-w-0">
                  <span
                    className={`shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full text-[0.7rem] md:text-xs font-bold flex items-center justify-center ${
                      "border border-white text-white"
                    }`}>
                    {i + 1}
                  </span>
                  <span className={`text-[0.75rem] md:text-sm font-semibold whitespace-nowrap text-white`}>
                    {s}
                  </span>
                </span>
                {i < stappen.length - 1 && <span className="w-3 md:w-8 h-px bg-white shrink-0" />}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-3">
          {producten.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group relative rounded-[20px] overflow-hidden bg-[#194366] active:scale-[0.97] transition-transform">
              <img
                src={p.foto}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A1B29]/90 via-[#0A1B29]/10 to-transparent" />
              <span className="absolute left-3 right-3 bottom-3 text-white text-[0.75rem] md:text-[0.875rem] font-bold uppercase tracking-[1.6px] leading-tight">
                {p.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
