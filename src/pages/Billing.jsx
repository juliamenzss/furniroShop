import { BannerHeader } from "../components/BannerHeader";
import { ServiceBar } from "../components/ServiceBar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { BillingForm } from "../components/BillingForm";
import { BillingDetails } from "../components/BillingDetails";

function Billing() {
  const bannerName = "Checkout";

  return (
    <div>
      <Menu />
      <BannerHeader name={bannerName} />
      <BillingForm /> 
      <BillingDetails />
      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Billing };