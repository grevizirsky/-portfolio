
import './App.css'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      <p>Desenvolvedor Front-End Especializado em React: Criando Interfaces de Usuário Dinâmicas e Responsivas para a Web do Futuro</p>
    </>
  )
}

export default App
