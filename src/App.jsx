import Header from './components/Header'
import Hero from './components/Hero'
import Grades from './components/Grades'
import Business from './components/Business'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white" style={{fontFamily:'\"Noto Serif JP\", serif'}}>
      <Header />
      <Hero />
      <Grades />
      <Business />
      <Contact />
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
