import { Menu } from 'lucide-react'
import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2F4F2F]/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-full ring-1 ring-[#2F4F2F]/20 bg-white grid place-items-center shadow-sm">
                <div className="w-6 h-6 rounded-full" style={{ background: 'conic-gradient(from 180deg, #6BA442 0deg, #2F4F2F 180deg, #6BA442 360deg)' }} />
              </div>
            </div>
            <span className="text-[1.15rem] tracking-tight font-serif text-[#1A1A1A] group-hover:opacity-90 transition-opacity">
              Ceremonial Matcha
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              { href:'#origine', label:'Origine' },
              { href:'#produse', label:'Grade' },
              { href:'#beneficii', label:'Pentru afaceri' },
            ].map((item)=> (
              <a key={item.href} href={item.href} className="relative text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors">
                <span className="pb-1">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#2F4F2F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#2F4F2F] text-white shadow-sm hover:shadow-md transition-all">
              Solicită ofertă
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="deschide meniu">
            <Menu className="w-6 h-6 text-[#1A1A1A]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#2F4F2F]/10 bg-white/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2 text-sm">
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
