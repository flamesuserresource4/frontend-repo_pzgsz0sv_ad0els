import { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight">Solicită ofertă</h2>
            <p className="mt-3 text-[#1A1A1A]/70">Completează câteva detalii iar noi revenim cu mostre, prețuri și condiții de colaborare.</p>
            <ul className="mt-6 space-y-2 text-sm text-[#1A1A1A]/70">
              <li>• Pentru restaurante, cafenele, cofetării</li>
              <li>• Pentru magazine și supermarketuri</li>
              <li>• Pentru comenzi individuale premium</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="bg-[#F5F0E8] rounded-2xl p-6 border border-[#2F4F2F]/10">
            {!sent ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#1A1A1A]/70 mb-1">Nume</label>
                  <input className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" required />
                </div>
                <div>
                  <label className="block text-sm text-[#1A1A1A]/70 mb-1">Email</label>
                  <input type="email" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" required />
                </div>
                <div>
                  <label className="block text-sm text-[#1A1A1A]/70 mb-1">Tip client</label>
                  <select className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]">
                    <option>Restaurant / Cafenea</option>
                    <option>Retail / Supermarket</option>
                    <option>Persoană fizică</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#1A1A1A]/70 mb-1">Mesaj</label>
                  <textarea rows="4" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" placeholder="Cantități, scop, termen de livrare etc." />
                </div>
                <button className="w-full rounded-full bg-[#1A1A1A] text-white py-3 hover:bg-[#2F4F2F] transition-colors">Trimite</button>
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-lg text-[#1A1A1A]">Mulțumim! Te contactăm în scurt timp.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
