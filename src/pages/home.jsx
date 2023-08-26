import About from "../components/about";
import Banner from "../components/banner";
import Brends from "../components/brends";
import Footer from "../components/footer";
import Header from "../components/header";
import Navigation from "../components/navbar";
import News from "../components/news";
import Products from "../components/products";
import Sale from "../components/sale";
import SaleBanner from "../components/salebanner";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Banner />
      <Brends />
      <Sale />
      <Products />
      <News />
      <SaleBanner />
      <About />
      <Footer />
    </>
  );
};
export default Home;
