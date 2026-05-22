
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer"
import About from "./components/About";
import Features from "./components/Features";


export default function Home() {
  return (
    <main id="home">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <About /> 
      <Footer />
    </main>
  );
}