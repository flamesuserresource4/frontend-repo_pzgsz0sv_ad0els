import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      client_type: form.get('client_type'),
      volume: form.get('volume'),
      packaging: form.get('packaging'),
      destination: form.get('destination'),
      message: form.get('message')
    }
    const res = await fetch(`${API}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (res.ok) setSent(true)
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
                  <input name="name" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" required />
                </div>
                <div>
                  <label className="block text-sm text-[#1A1A1A]/70 mb-1">Email</label>
                  <input name="email" type="email" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-[#1A1A1A]/70 mb-1">Tip client</label>
                    <select name="client_type" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]">
                      <option>Restaurant / Cafenea</option>
                      <option>Retail / Supermarket</option>
                      <option>Persoană fizică</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#1A1A1A]/70 mb-1">Volum lunar</label>
                    <select name="volume" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]">
                      <option>mostre</option>
                      <option>1–5 kg</option>
                      <option>5–20 kg</option>
                      <option>20kg+</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-[#1A1A1A]/70 mb-1">Ambalaj</label>
                    <select name="packaging" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]">
                      <option>30g</option>
                      <option>500g</option>
                      <option>1kg</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#1A1A1A]/70 mb-1">Destinație</label>
                    <select name="destination" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]">
                      <option>HORECA</option>
                      <option>Retail</option>
                      <option>Acasă</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#1A1A1A]/70 mb-1">Mesaj</label>
                  <textarea name="message" rows="4" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" placeholder="Cantități, scop, termen de livrare etc." />
                </div>
                <button className="w-full rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#2F4F2F] text-white py-3 shadow-sm hover:shadow-md transition-all">Trimite</button>
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
