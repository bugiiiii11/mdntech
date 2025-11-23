function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="bg-black/95 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-black">
            <span className="text-white">MDN</span>
            <span className="text-orange-primary"> STROJE</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-white/90 hover:text-orange-primary transition">Požičovňa</a>
            <a href="#" className="text-white/90 hover:text-orange-primary transition">Služby</a>
            <a href="#" className="text-white/90 hover:text-orange-primary transition">Kontakt</a>
          </nav>
          <a 
            href="tel:+421948555551"
            className="px-6 py-2 bg-gradient-to-r from-orange-primary to-orange-hover text-white font-bold rounded-full hover:scale-105 transition"
          >
            Zavolať
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-orange-primary/20 border border-orange-primary/40 rounded-full text-orange-primary text-sm font-bold uppercase mb-4">
            Test Stránka
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Do you have an idea?
            <br />
            <span className="bg-gradient-to-r from-orange-primary to-orange-hover bg-clip-text text-transparent">
              Build your project from scratch
            </span>
          </h1>
          <p className="text-white/80 text-xl mb-8">
            Táto stránka je pripravená na vývoj. Všetko funguje správne! 🎉
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-primary to-orange-hover text-white font-bold rounded-full hover:scale-105 transition shadow-xl">
              Primary Button
            </button>
            <button className="px-8 py-4 bg-zinc-800 border-2 border-zinc-700 text-white font-bold rounded-full hover:bg-zinc-700 transition">
              Secondary Button
            </button>
          </div>
        </div>
      </section>

      {/* Test Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">
            Test <span className="text-orange-primary">Komponenty</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-orange-primary/50 transition">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold mb-2">Card {i}</h3>
                <p className="text-white/70 mb-4">
                  Toto je testovacia karta pre overenie dizajnu a funkcionality.
                </p>
                <button className="text-orange-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition">
                  Zistiť viac
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-white/60 text-sm">
          <p>© 2025 M.D.N TECH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App