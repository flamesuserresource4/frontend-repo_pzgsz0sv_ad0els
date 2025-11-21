function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F0E8]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-50" style={{background:'#6BA442'}} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{background:'#2F4F2F'}} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl sm:text-5xl leading-tight tracking-tight text-[#1A1A1A] font-serif">
              Matcha ceremonial din Japonia, selecție premium pentru profesioniști și cunoscători
            </h1>
            <p className="mt-6 text-[#1A1A1A]/70 text-lg">
              Import direct din Kagoshima și Uji. Arome umami bogate, textură catifelată și culoare verde vibrantă.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2F4F2F] transition-colors">
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
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#2F4F2F]/10 rounded-2xl px-5 py-3 shadow-md text-sm text-[#1A1A1A]/80">
              Recoltat din umbră • Măcinat pe piatră
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
