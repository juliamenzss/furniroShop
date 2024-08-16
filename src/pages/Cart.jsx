import { BannerHeader } from "../components/BannerHeader";
import { ServiceBar } from "../components/ServiceBar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { CartTotal } from "../components/CartTotal";

function Cart() {
    const bannerName = "Cart";
  return (
    <div >
      <Menu />
      <BannerHeader name={bannerName} />
      <div className="flex justify-center items-center">
      <CartTotal/>
      </div>
      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Cart };