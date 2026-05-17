
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Features />
      <Products />
      <About /> */}
    </main>
  );
}