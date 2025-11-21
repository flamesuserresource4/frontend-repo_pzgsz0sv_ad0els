import { Menu } from 'lucide-react'
import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-[#2F4F2F]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{ background: 'conic-gradient(from 180deg, #6BA442 0deg, #2F4F2F 180deg, #6BA442 360deg)' }} />
            <span className="text-xl tracking-tight font-serif text-[#1A1A1A]">
              Ceremonial Matcha
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#origine" className="text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors">Origine</a>
            <a href="#produse" className="text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors">Grade</a>
            <a href="#beneficii" className="text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors">Pentru afaceri</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2F4F2F] transition-colors">Solicită ofertă</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="deschide meniu">
            <Menu className="w-6 h-6 text-[#1A1A1A]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#2F4F2F]/10 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm">
            <a href="#origine" className="py-2">Origine</a>
            <a href="#produse" className="py-2">Grade</a>
            <a href="#beneficii" className="py-2">Pentru afaceri</a>
            <a href="#contact" className="py-2">Solicită ofertă</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
