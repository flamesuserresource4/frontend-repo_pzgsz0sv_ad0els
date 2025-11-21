function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F0E8]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-50" style={{background:'#6BA442'}} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{background:'#2F4F2F'}} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-28">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F4F2F]/20 bg-white/60 backdrop-blur px-3 py-1 text-xs text-[#1A1A1A]/70">
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{background:'#6BA442'}}></span>
              Import direct • Kagoshima & Uji
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl leading-tight tracking-tight text-[#1A1A1A] font-serif">
              Matcha ceremonial din Japonia, selecție premium pentru profesioniști și cunoscători
            </h1>
            <p className="mt-6 text-[#1A1A1A]/70 text-lg">
              Arome umami bogate, măcinat pe piatră, culoare verde vibrantă. Loturi small‑lot cu trasabilitate completă.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#2F4F2F] text-white shadow-sm hover:shadow-md transition-all">
                Solicită ofertă B2B
              </a>
              <a href="#produse" className="px-5 py-3 rounded-full border border-[#2F4F2F] text-[#2F4F2F] hover:bg-[#2F4F2F] hover:text-white transition-colors">
                Vezi gradele
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-[#1A1A1A]/70">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{background:'#6BA442'}}></span>Origine trasabilă</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{background:'#6BA442'}}></span>Grad ceremonial</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{background:'#6BA442'}}></span>Batch small-lot</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white shadow-xl border border-[#2F4F2F]/10 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1600&auto=format&fit=crop" alt="Bol cu matcha ceremonial" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur border border-[#2F4F2F]/10 rounded-2xl px-5 py-3 shadow-md text-sm text-[#1A1A1A]/80">
              Recoltat din umbră • Măcinat pe piatră
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
