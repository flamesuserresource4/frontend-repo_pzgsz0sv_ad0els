import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Shop from './components/Shop'
import Grades from './components/Grades'
import Business from './components/Business'
import Contact from './components/Contact'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.slug === product.slug)
      if (exists) {
        return prev.map(i => i.slug === product.slug ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { slug: product.slug, title: product.title, price: product.price, qty: 1 }]
    })
  }

  const removeFromCart = (slug) => {
    setCart(prev => prev.filter(i => i.slug !== slug))
  }

  const clearCart = () => setCart([])

  return (
    <div className="min-h-screen bg-white" style={{fontFamily:'"Noto Serif JP", serif'}}>
      <Header />
      <Hero />
      <Shop onAdd={addToCart} />
      <Grades />
      <Business />
      <Contact />
      <div id="cos">
        <Cart items={cart} onRemove={removeFromCart} onClear={clearCart} />
      </div>
      <footer className="bg-[#1A1A1A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Ceremonial Matcha — import direct din Japonia</p>
          <div className="text-sm opacity-80">Culori: #6BA442 • #2F4F2F • #F5F0E8 • #FFFFFF • #1A1A1A</div>
        </div>
      </footer>
    </div>
  )
}

export default App
