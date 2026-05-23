import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Kodawari from "./components/Kodawari";
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
        <Access />
      </main>
      <Footer />
    </>
  );
}
