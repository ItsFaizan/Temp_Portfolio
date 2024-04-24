import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Cover from "../components/Cover/Cover";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Experience from "../components/Experience/Experience";


export default function Home() {
  return (
    <>
      <Head>
        <title>Faizan Javed | Portfolio</title>
        <meta name="description" content="Faizan Javed | React / NextJS Dev | Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Cover />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
