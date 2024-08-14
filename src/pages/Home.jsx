import { BannerHeader } from "../components/BannerHeader";
import { ServiceBar } from "../components/ServiceBar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
function Home() {
  return (
    <div>
      <Menu />
      <BannerHeader />
      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Home };
