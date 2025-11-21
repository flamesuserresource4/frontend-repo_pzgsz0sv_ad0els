function Grades() {
  return (
    <section id="produse" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight">Grade ceremoniale</h2>
          <p className="mt-3 text-[#1A1A1A]/70">Toate loturile sunt analizate senzorial și certificate. Recomandări pentru barista, retail și consum acasă.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Kagoshima Supreme', note: 'umami intens, dulceață curată', color: '#6BA442', use: 'ceremonial, straight' },
            { name: 'Uji Heritage', note: 'echilibru fin, catifelat', color: '#2F4F2F', use: 'latte premium' },
            { name: 'Daily Ceremonial', note: 'versatil, proaspăt', color: '#9DC77C', use: 'horeca & retail' },
          ].map((g, i) => (
            <div key={i} className="group rounded-2xl border border-[#2F4F2F]/10 overflow-hidden bg-[#F5F0E8] transition-transform duration-300 hover:-translate-y-0.5">
              <div className="h-2" style={{background:g.color}} />
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#1A1A1A]">{g.name}</h3>
                <p className="mt-2 text-sm text-[#1A1A1A]/70">{g.note}</p>
                <p className="mt-4 text-xs uppercase tracking-wide text-[#1A1A1A]/50">Recomandat pentru: {g.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Grades
