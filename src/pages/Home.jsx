import { BannerHeader } from "../components/BannerHeader";
import { ServiceBar } from "../components/ServiceBar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { FilterToolbar } from "../components/FilterToolbar";
function Home() {
  return (
    <div>
      <Menu />
      <BannerHeader />
      <FilterToolbar />
      <ProductCard />
      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Home };
