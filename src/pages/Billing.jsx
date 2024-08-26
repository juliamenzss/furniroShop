import { BannerHeader } from "../components/banner/BannerHeader";
import { ServiceBar } from "../components/services/ServiceBar";
import { Menu } from "../components/menu/Menu";
import { Footer } from "../components/footer/Footer";
import { BillingForm } from "../components/billing/BillingForm";
import { BillingDetails } from "../components/billing/BillingDetails";

function Billing() {
  const bannerName = "Checkout";

  return (
    <div>
      <Menu />
      <BannerHeader name={bannerName} />
      <div className="flex flex-col items-center lg:flex-row justify-center lg:items-start">
      <BillingForm /> 
      <BillingDetails />
      </div>
      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Billing };