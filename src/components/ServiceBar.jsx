import Quality from "../assets/quality.png";
import Protection from "../assets/protection.png";
import Shipping from "../assets/shipping.png";
import Support from "../assets/support.png";

function ServiceBar() {
  return (
    <section className="w-full h-44 bg-light-pink flex items-center justify-center">
      <ul className="flex items-center justify-between gap-x-20">
        <li className="flex items-center space-x-3">
          <img src={Quality} alt="Quality trophy" className="w-10 h-auto object-contain"/>
          <div>
            <h1 className="font-semibold text-xl">High Quality</h1>
            <p className="font-medium text-base text-gray">crafted from top materials</p>
          </div>
        </li>
        <li className="flex items-center space-x-3">
          <img src={Protection} alt="Warranty protection" className="w-10 h-auto object-contain" />
          <div>
            <h1 className="font-semibold text-xl">Warranty Protection</h1>
            <p className="font-medium text-base text-gray">Over 2 years</p>
          </div>
        </li>
        <li className="flex items-center space-x-3">
          <img src={Shipping} alt="Free shipping over $150" className="w-10 h-auto object-contain" />
          <div>
            <h1 className="font-semibold text-xl">Free Shipping</h1>
            <p className="font-medium text-base text-gray">Order over 150 $</p>
          </div>
        </li>
        <li className="flex items-center space-x-3">
          <img src={Support} alt="Dedicated support" className="w-10 h-auto object-contain" />
          <div>
            <h1 className="font-semibold text-xl">24 / 7 Support</h1>
            <p className="font-medium text-base text-gray">Dedicated support</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export { ServiceBar };
