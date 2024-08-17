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
      <div className="flex flex-col items-center lg:flex-row justify-center lg:items-start pr-24">
      <BillingForm /> 
      <BillingDetails />
      </div>
      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Billing };