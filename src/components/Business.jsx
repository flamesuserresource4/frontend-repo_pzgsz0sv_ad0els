function Business() {
  return (
    <section id="beneficii" className="bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight">Pentru restaurante și retail</h2>
            <p className="mt-3 text-[#1A1A1A]/70">Program B2B cu prețuri preferențiale, asistență la implementare și livrare rapidă din stoc.</p>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              { t:'Import direct', d:'Fără intermediari, trasabilitate pe lot și certificate de analiză.' },
              { t:'Calitate constantă', d:'Blenduri calibrate și profil stabil de la recoltă la recoltă.' },
              { t:'Suport barista', d:'Training pentru echipă și rețete standardizate pentru meniuri.' },
              { t:'Ambalaj premium', d:'Pungi cu supapă și atmosferă protectoare, 30g / 500g / 1kg.' },
            ].map((f,i)=>(
              <div key={i} className="rounded-2xl border border-[#2F4F2F]/10 bg-white p-6 hover:shadow-sm transition-shadow">
                <h3 className="text-lg font-serif text-[#1A1A1A]">{f.t}</h3>
                <p className="mt-2 text-sm text-[#1A1A1A]/70">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Business
