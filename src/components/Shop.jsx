import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

function Shop({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API}/api/products`)
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        setProducts(data)
      } else {
        // seed defaults then refetch
        await fetch(`${API}/api/seed`, { method: 'POST' })
        const res2 = await fetch(`${API}/api/products`)
        const data2 = await res2.json()
        setProducts(Array.isArray(data2) ? data2 : [])
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchProducts() }, [])

  return (
    <section id="magazin" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight">Magazin</h2>
          <p className="mt-3 text-[#1A1A1A]/70">Alege gradul potrivit. Livrare rapidă din stoc.</p>
        </div>

        {loading ? (
          <p className="mt-10 text-[#1A1A1A]/70">Se încarcă produsele…</p>
        ) : (
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {products.map(p => (
              <div key={p.slug} className="group rounded-2xl border border-[#2F4F2F]/10 overflow-hidden bg-[#F5F0E8] transition-transform duration-300 hover:-translate-y-0.5">
                <div className="h-48 bg-white grid place-items-center overflow-hidden">
                  <img src={p.image || 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#1A1A1A]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[#1A1A1A]/70">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[#1A1A1A] font-medium">{p.price.toFixed(2)} RON</span>
                    <button onClick={() => onAdd(p)} className="px-4 py-2 rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#2F4F2F] text-white shadow-sm hover:shadow-md transition-all">
                      Adaugă în coș
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Shop
