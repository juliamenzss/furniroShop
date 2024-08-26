import { BannerHeader } from "../components/banner/BannerHeader";
import { ServiceBar } from "../components/services/ServiceBar";
import { Menu } from "../components/menu/Menu";
import { Footer } from "../components/footer/Footer";
import { CartTotal } from "../components/cartPage/CartTotal";

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