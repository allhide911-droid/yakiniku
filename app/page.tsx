import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Kodawari from "./components/Kodawari";
import Interior from "./components/Interior";
import Scene from "./components/Scene";
import Access from "./components/Access";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Kodawari />
        <Interior />
        <Scene />
        <Access />
      </main>
      <Footer />
    </>
  );
}
