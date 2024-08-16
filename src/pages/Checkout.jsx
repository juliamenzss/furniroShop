import { BannerHeader } from "../components/BannerHeader";
import { ServiceBar } from "../components/ServiceBar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";

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