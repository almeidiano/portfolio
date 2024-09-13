import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/api/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const navbarItems = [
    {id: 1, name: 'Home', href: '#'}, 
    {id: 2, name: 'Sobre', href: '#about'},
    {id: 3, name: 'Portfolio', href: '#portfolio'},
    {id: 5, name: 'Experiência', href: '#experience'},
    {id: 4, name: 'Contato', href: '#contact'}
  ]

  return (
    <>
      <Navbar items={navbarItems} />
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
