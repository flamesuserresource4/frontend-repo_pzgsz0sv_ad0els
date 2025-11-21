import { useMemo, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

function Cart({ items, onRemove, onClear }) {
  const [placed, setPlaced] = useState(false)
  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items])

  const placeOrder = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      items: items.map(i => ({ slug: i.slug, quantity: i.qty })),
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      address: form.get('address'),
      city: form.get('city'),
      notes: form.get('notes')
    }
    const res = await fetch(`${API}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (res.ok) {
      setPlaced(true)
      onClear()
    }
  }

  return (
    <section className="bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-serif text-[#1A1A1A]">Coș</h2>
        {items.length === 0 ? (
          <p className="mt-2 text-[#1A1A1A]/70">Coșul este gol.</p>
        ) : (
          <div className="mt-6 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {items.map((i) => (
                <div key={i.slug} className="flex items-center justify-between rounded-xl bg-white border border-[#2F4F2F]/10 p-4">
                  <div>
                    <div className="font-serif text-[#1A1A1A]">{i.title}</div>
                    <div className="text-sm text-[#1A1A1A]/70">{i.qty} x {i.price.toFixed(2)} RON</div>
                  </div>
                  <button onClick={() => onRemove(i.slug)} className="text-sm text-[#2F4F2F] hover:underline">Elimină</button>
                </div>
              ))}
            </div>
            <div>
              <div className="rounded-2xl bg-white border border-[#2F4F2F]/10 p-6">
                <div className="flex items-center justify-between">
                  <span>Total</span>
                  <span className="font-medium">{total.toFixed(2)} RON</span>
                </div>
                <form onSubmit={placeOrder} className="mt-6 space-y-3">
                  <input name="name" placeholder="Nume" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" required />
                  <input name="email" placeholder="Email" type="email" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" required />
                  <input name="phone" placeholder="Telefon" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" />
                  <input name="address" placeholder="Adresă" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" />
                  <input name="city" placeholder="Oraș" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" />
                  <textarea name="notes" placeholder="Observații" rows="3" className="w-full rounded-md border border-[#2F4F2F]/20 bg-white px-3 py-2 outline-none focus:border-[#2F4F2F]" />
                  <button className="w-full rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#2F4F2F] text-white py-3 shadow-sm hover:shadow-md transition-all">Plasează comanda</button>
                </form>
                {placed && <p className="mt-3 text-[#1A1A1A]">Comanda a fost înregistrată. Mulțumim!</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
