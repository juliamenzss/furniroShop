import { BannerHeader } from "../components/banner/BannerHeader";
import { ServiceBar } from "../components/services/ServiceBar";
import { Menu } from "../components/menu/Menu";
import { Footer } from "../components/footer/Footer";
import { ProductCard } from "../components/card/ProductCard";

function Checkout() {
  const bannerName = "Checkout";

  return (
    <div>
      <Menu />
      <BannerHeader name={bannerName} />
      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Checkout };